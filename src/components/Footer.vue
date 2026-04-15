<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Left Section - Brand -->
        <div class="footer-brand">
          <h3 class="footer-logo">Gazelle Pearson</h3>
          <p class="footer-tagline">Entry-UI Software Developer, crafting beautiful and functional web experiences.</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/gazelle-pearson-83517a274/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:pearsongazelle@gmail.com" class="social-link" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Gazelle608" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <!-- Center Section - Quick Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
          </ul>
        </div>
        
        <!-- Right Section - Contact Info -->
        <div class="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:pearsongazelle@gmail.com">pearsongazelle@gmail.com</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Cape Town, South Africa</span>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>Available for opportunities</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright Bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 All Rights Reserved.</p>
        <p class="footer-built">
          Built By Gazelle Pearson
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 4rem 0 1.5rem;
  margin-top: 2rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main Footer Content - Three Column Layout */
.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.footer-brand {
  max-width: 400px;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f3e5ab 0%, var(--accent) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-tagline {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: rgba(26, 127, 107, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.2rem;
  transition: var(--transition);
  border: 1px solid var(--border-subtle);
}

.social-link:hover {
  background: var(--primary);
  color: var(--accent);
  transform: translateY(-3px);
  border-color: var(--accent);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
}

/* Quick Links Section */
.footer-links h4,
.footer-contact h4 {
  color: var(--accent);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

.footer-links h4::after,
.footer-contact h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-links a {
  color: var(--text-light);
  transition: var(--transition);
  display: inline-block;
  position: relative;
}

.footer-links a::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: var(--transition);
  color: var(--accent);
}

.footer-links a:hover {
  color: var(--accent);
  padding-left: 20px;
}

.footer-links a:hover::before {
  opacity: 1;
  left: 0;
}

/* Contact Info Section */
.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: var(--text-light);
}

.footer-contact i {
  color: var(--accent);
  font-size: 1.1rem;
  width: 20px;
  margin-top: 3px;
}

.footer-contact a {
  color: var(--text-light);
  transition: var(--transition);
}

.footer-contact a:hover {
  color: var(--accent);
}

/* Bottom Copyright Bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.9rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-built i {
  color: var(--accent);
  margin: 0 0.25rem;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

/* Large Desktop - Extra Stretch */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
  
  .footer-content {
    gap: 6rem;
  }
  
  .footer-brand {
    max-width: 500px;
  }
}

/* Desktop */
@media (min-width: 1025px) and (max-width: 1280px) {
  .footer-content {
    gap: 3rem;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 2.5rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
}

/* Small Tablet / Large Mobile */
@media (max-width: 860px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-brand {
    grid-column: span 2;
    max-width: 100%;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand {
    grid-column: span 1;
  }
  
  .footer-links h4::after,
  .footer-contact h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-links a::before {
    display: none;
  }
  
  .footer-links a:hover {
    padding-left: 0;
  }
  
  .footer-contact li {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .footer-logo {
    font-size: 1.5rem;
  }
  
  .footer-tagline {
    font-size: 0.9rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
}
</style>