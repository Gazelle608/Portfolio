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
              <p>Within 24 hours</p>
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