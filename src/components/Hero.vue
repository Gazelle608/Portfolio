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
        <div class="constellation">
          <div class="constellation-core">&lt;/&gt;</div>
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="star star-6"></div>
        </div>
      </div>
    </div>
  </section>
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

.constellation {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.constellation-core {
  position: relative;
  z-index: 2;
  font-size: 3.2rem;
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-shadow: 0 0 18px rgba(212, 175, 55, 0.6);
}

.star {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f4e07e, #d4af37);
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.75);
}

.star-1 {
  top: 18%;
  left: 24%;
}

.star-2 {
  top: 22%;
  right: 22%;
}

.star-3 {
  top: 48%;
  left: 10%;
}

.star-4 {
  bottom: 22%;
  left: 30%;
}

.star-5 {
  bottom: 18%;
  right: 20%;
}

.star-6 {
  top: 55%;
  right: 10%;
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