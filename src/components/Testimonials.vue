<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">What People Say</span>
        <h2>Testimonials</h2>
      </div>
      
      <div class="testimonials-grid">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="testimonial-card"
        >
          <div class="testimonial-header">
            <!-- <div class="testimonial-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name">
            </div> -->
            <div class="testimonial-info">
              <h3>{{ testimonial.name }}</h3>
              <p class="role">{{ testimonial.role }}</p>
              <p class="company">{{ testimonial.company }}</p>
            </div>
          </div>
          
          <div class="testimonial-rating">
            <i 
              v-for="star in testimonial.rating" 
              :key="star"
              class="fas fa-star"
            ></i>
          </div>
          
          <p class="testimonial-message">
            "{{ testimonial.message }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from '../data/testimonials.js'
</script>

<style scoped>
.testimonials {
  border-top: 1px solid var(--border-subtle);
  background: rgba(10, 26, 18, 0.5);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  display: inline-block;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--text);
  margin: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid var(--border-subtle);
  transition: var(--transition);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: var(--shadow-gold);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.testimonial-avatar {
  flex-shrink: 0;
}

.testimonial-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  border: 2px solid var(--accent);
}

.testimonial-info {
  flex: 1;
}

.testimonial-info h3 {
  font-size: 1.1rem;
  margin: 0 0 0.25rem 0;
  color: var(--text);
}

.role {
  font-size: 0.9rem;
  color: var(--accent);
  margin: 0;
  font-weight: 500;
}

.company {
  font-size: 0.85rem;
  color: var(--text-light);
  margin: 0.25rem 0 0 0;
}

.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.testimonial-rating i {
  color: var(--accent);
  font-size: 1rem;
}

.testimonial-message {
  color: var(--text-light);
  line-height: 1.8;
  font-style: italic;
  margin: 0;
  flex: 1;
}

@media (max-width: 767px) {
  .container {
    padding: 3rem 1.5rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>
