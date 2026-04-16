<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Get In Touch</span>
        <h2>Let's Work Together</h2>
      </div>
      
      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:pearsongazelle@gmail.com">pearsongazelle@gmail.com</a>
            </div>
          </div>
          
          <div class="info-card">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4>Location</h4>
              <p>Cape Town, South Africa</p>
            </div>
          </div>
          
          <div class="info-card">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div>
              <h4>Response Time</h4>
              <p>As Soon As Available</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form @submit.prevent="sendMessage">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                required
                placeholder="Your name"
                class="form-control"
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                placeholder="your@email.com"
                class="form-control"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                placeholder="Your message..."
                class="form-control"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              <i v-if="!isLoading" class="fas fa-paper-plane"></i>
              <span v-if="isLoading" class="spinner"></span>
              {{ isLoading ? 'Sending...' : 'Send Message' }}
            </button>
            
            <div v-if="formMessage" :class="['form-message', formMessageType]">
              {{ formMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const formMessage = ref('')
const formMessageType = ref('success')

const sendMessage = async () => {
  isLoading.value = true
  formMessage.value = ''
  
  try {
    const response = await fetch('https://formspree.io/f/xwvavdln', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    })
    
    if (response.ok) {
      formMessageType.value = 'success'
      formMessage.value = 'Message sent successfully! I\'ll get back to you soon.'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      formMessageType.value = 'error'
      formMessage.value = 'Failed to send message. Please try again.'
    }
  } catch (error) {
    formMessageType.value = 'error'
    formMessage.value = 'Network error. Please try again later.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.contact {
  border-top: 1px solid var(--border-subtle);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--dark-card);
  border-radius: 15px;
  border: 1px solid var(--border-subtle);
  transition: var(--transition);
}

.info-card:hover {
  border-color: var(--accent);
  transform: translateX(5px);
}

.contact-icon {
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.info-card h4 {
  color: var(--text);
  margin-bottom: 0.25rem;
}

.info-card p,
.info-card a {
  color: var(--text-light);
  transition: var(--transition);
}

.info-card a:hover {
  color: var(--accent);
}

.contact-form {
  background: var(--dark-card);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid var(--border-subtle);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
}

.form-control {
  width: 100%;
  padding: 0.85rem 1rem;
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text);
  transition: var(--transition);
}

.form-control:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-control::placeholder {
  color: var(--text-muted);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 0.85rem 2rem;
  border-radius: 40px;
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border: 1.5px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border: none;
  box-shadow: 0 8px 20px rgba(15, 92, 75, 0.3);
  width: 100%;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--primary-light), var(--secondary));
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(15, 92, 75, 0.4);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}

.form-message.success {
  background: rgba(15, 92, 75, 0.2);
  color: var(--secondary);
  border: 1px solid var(--primary);
}

.form-message.error {
  background: rgba(255, 101, 132, 0.1);
  color: #ff6584;
  border: 1px solid #ff6584;
}

.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-info {
    gap: 1.5rem;
  }

  .info-card {
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 1.25rem;
  }

  .contact-icon {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
  }

  .info-card h4 {
    font-size: 1rem;
  }

  .info-card p,
  .info-card a {
    word-break: break-word;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-control {
    font-size: 0.95rem;
  }
}
</style>