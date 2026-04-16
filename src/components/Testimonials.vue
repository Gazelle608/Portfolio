<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">What People Say</span>
        <h2>Testimonials</h2>
      </div>
      
      <div class="testimonials-wrapper">
        <!-- Left Arrow -->
        <button 
          class="nav-arrow nav-arrow-left" 
          @click="previousTestimonial"
          :disabled="currentIndex === 0"
          aria-label="Previous testimonial"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <!-- Active Testimonial -->
        <div class="testimonial-card-wrapper">
          <transition :name="transitionName" mode="out-in">
            <div 
              :key="currentIndex"
              class="testimonial-card"
            >
              <div class="testimonial-header">
                <div class="testimonial-info">
                  <h3>{{ currentTestimonial.name }}</h3>
                  <p class="role">{{ currentTestimonial.role }}</p>
                  <p class="company">{{ currentTestimonial.company }}</p>
                </div>
              </div>
              
              <div class="testimonial-rating">
                <i 
                  v-for="star in currentTestimonial.rating" 
                  :key="star"
                  class="fas fa-star"
                ></i>
              </div>
              
              <p class="testimonial-message">
                "{{ currentTestimonial.message }}"
              </p>
            </div>
          </transition>
        </div>
        
        <!-- Right Arrow -->
        <button 
          class="nav-arrow nav-arrow-right" 
          @click="nextTestimonial"
          :disabled="currentIndex === testimonials.length - 1"
          aria-label="Next testimonial"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <!-- Dot Indicators -->
      <div class="testimonial-dots">
        <button 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          @click="goToTestimonial(index)"
          :class="['dot', { active: currentIndex === index }]"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
      
      <!-- Testimonial Counter -->
      <div class="testimonial-counter">
        {{ currentIndex + 1 }} / {{ testimonials.length }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { testimonials } from '../data/testimonials.js'

const currentIndex = ref(0)
const transitionName = ref('slide-left')

const currentTestimonial = computed(() => testimonials[currentIndex.value])

const nextTestimonial = () => {
  if (currentIndex.value < testimonials.length - 1) {
    transitionName.value = 'slide-left'
    currentIndex.value++
  }
}

const previousTestimonial = () => {
  if (currentIndex.value > 0) {
    transitionName.value = 'slide-right'
    currentIndex.value--
  }
}

const goToTestimonial = (index) => {
  transitionName.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = index
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    previousTestimonial()
  } else if (e.key === 'ArrowRight') {
    nextTestimonial()
  }
}

// Add keyboard listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
.testimonials {
  border-top: 1px solid var(--border-subtle);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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

/* Wrapper for arrows + card */
.testimonials-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.testimonial-card-wrapper {
  flex: 1;
  max-width: 700px;
  min-height: 350px;
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
  height: 100%;
  box-shadow: var(--shadow);
}

.testimonial-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-gold);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.testimonial-info h3 {
  font-size: 1.3rem;
  margin: 0 0 0.25rem 0;
  color: var(--text);
}

.role {
  font-size: 1rem;
  color: var(--accent);
  margin: 0;
  font-weight: 500;
}

.company {
  font-size: 0.9rem;
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
  font-size: 1.1rem;
}

.testimonial-message {
  color: var(--text-light);
  line-height: 1.8;
  font-style: italic;
  margin: 0;
  flex: 1;
  font-size: 1.05rem;
}

/* Navigation Arrows */
.nav-arrow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--dark-card);
  border: 1px solid var(--border-subtle);
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  flex-shrink: 0;
}

.nav-arrow:hover:not(:disabled) {
  background: var(--primary);
  border-color: var(--accent);
  color: var(--accent);
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Dot Indicators */
.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 0;
}

.dot:hover {
  background: var(--accent);
  transform: scale(1.2);
}

.dot.active {
  background: var(--accent);
  width: 30px;
  border-radius: 10px;
}

/* Counter */
.testimonial-counter {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

/* Slide Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 3rem 1.5rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .testimonials-wrapper {
    gap: 0.5rem;
  }

  .testimonial-card {
    padding: 1.8rem;
  }

  .testimonial-card-wrapper {
    min-height: 400px;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .testimonial-message {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 2.5rem 1rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .testimonials-wrapper {
    position: relative;
  }

  .testimonial-card {
    padding: 1.5rem;
  }

  .testimonial-card-wrapper {
    min-height: 420px;
  }

  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(13, 26, 31, 0.95);
    backdrop-filter: blur(5px);
  }

  .nav-arrow-left {
    left: -10px;
  }

  .nav-arrow-right {
    right: -10px;
  }

  .testimonial-info h3 {
    font-size: 1.1rem;
  }

  .role {
    font-size: 0.9rem;
  }

  .company {
    font-size: 0.85rem;
  }
}
</style>