<template>
  <section class="hero" id="home">
    <div class="hero-grid">
      <div class="hero-content">
        <p class="pre-title">FULL‑STACK DEVELOPER</p>
        <h1>Hi, I'm <span class="highlight">Gazelle</span></h1>
        <p class="hero-desc">
          An Entry-lvl developer with advanced coding experience, creating beautiful web 
          experiences with a focus on full‑stack architecture.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollToSection('projects')">
            <i class="fas fa-arrow-down"></i>
            View My Work
          </a>
          <a href="/Resume.pdf" class="btn btn-outline" download>
            <i class="fas fa-download"></i>
            Download CV
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <AnimatedCube />
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedCube from './AnimatedCube.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
}

.pre-title {
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.highlight {
  background: linear-gradient(135deg, #f0e6b2 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-desc {
  color: var(--text-light);
  font-size: 1.15rem;
  max-width: 95%;
  margin: 1.5rem 0 2.5rem;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .hero-desc {
    font-size: 1rem;
  }
  
  .hero-visual {
    min-height: 320px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 3rem;
    min-height: auto;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-desc {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-visual {
    min-height: 280px;
    order: -1;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 4rem 0 2rem;
  }
  
  .pre-title {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
  
  .hero-desc {
    font-size: 0.95rem;
    margin: 1rem 0 1.5rem;
  }
  
  .hero-visual {
    min-height: 240px;
  }
}
</style>