import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting - 5 requests per hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message: { success: false, message: 'Too many requests. Please try again later.' }
});
app.use('/send-message', limiter);

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Contact form endpoint
app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required.' 
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please enter a valid email address.' 
        });
    }

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.CONTACT_EMAIL,
        subject: `🎯 Portfolio Contact: ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0f5c4b; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
                    New Message from Portfolio
                </h2>
                <p><strong style="color: #0f5c4b;">Name:</strong> ${name}</p>
                <p><strong style="color: #0f5c4b;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong style="color: #0f5c4b;">Message:</strong></p>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
                <p style="margin-top: 20px; color: #666; font-size: 12px;">
                    Sent from Gazelle Pearson Portfolio Contact Form
                </p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later.' 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});