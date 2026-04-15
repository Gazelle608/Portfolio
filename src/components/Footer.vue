<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <h3>Gazelle Pearson</h3>
          <p>Entry-lvl Software Developer, crafting beautiful and functional web experiences.</p>
          <div class="social-links">
            <a href="https://github.com/Gazelle608" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gazelle-pearson-83517a274/" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:pearsongazelle@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3>Contact Info</h3>
          <p><i class="fas fa-envelope"></i> pearsongazelle@gmail.com</p>
          <p><i class="fas fa-map-marker-alt"></i> Cape Town, South Africa</p>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2026 Gazelle Pearson. All Rights Reserved.</p>
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
  background: var(--dark-card);
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.footer-about h3 {
  color: var(--accent);
  margin-bottom: 1rem;
}

.footer-about p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(26, 127, 107, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  transition: var(--transition);
  border: 1px solid var(--border-subtle);
}

.social-link:hover {
  background: var(--primary);
  color: var(--accent);
  transform: translateY(-3px);
  border-color: var(--accent);
}

.footer-links h3,
.footer-contact h3 {
  color: var(--text);
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  position: relative;
}

.footer-links h3::after,
.footer-contact h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent);
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-light);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--accent);
  padding-left: 5px;
}

.footer-contact p {
  color: var(--text-light);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-contact i {
  color: var(--accent);
  width: 20px;
}

.copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 860px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-links h3::after,
  .footer-contact h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-contact p {
    justify-content: center;
  }
}
</style>