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
          <div class="code-symbol code-1">{ }</div>
          <div class="code-symbol code-2">[]</div>
          <div class="code-symbol code-3">()</div>
          <div class="code-symbol code-4">&lt;&gt;</div>
          <div class="line l1"></div>
          <div class="line l2"></div>
          <div class="line l3"></div>
          <div class="line l4"></div>
          <div class="line l5"></div>
          <div class="line l6"></div>
          <div class="star s1"></div>
          <div class="star s2"></div>
          <div class="star s3"></div>
          <div class="star s4"></div>
          <div class="star s5"></div>
          <div class="star s6"></div>
          <div class="star s7"></div>
          <div class="star s8"></div>
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
  font-size: 3rem;
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-shadow: 0 0 16px rgba(212, 175, 55, 0.5);
}

.line {
  position: absolute;
  background: rgba(212, 175, 55, 0.16);
  border-radius: 1px;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.14);
}

.line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.28), transparent 70%);
  opacity: 0.7;
}

.l1 {
  top: 20%;
  left: 22%;
  width: 30%;
  height: 1px;
  transform: rotate(14deg);
}

.l2 {
  top: 22%;
  left: 45%;
  width: 20%;
  height: 1px;
  transform: rotate(56deg);
}

.l3 {
  top: 33%;
  left: 21%;
  width: 34%;
  height: 1px;
  transform: rotate(-10deg);
}

.l4 {
  top: 43%;
  left: 55%;
  width: 28%;
  height: 1px;
  transform: rotate(28deg);
}

.l5 {
  top: 49%;
  left: 30%;
  width: 48%;
  height: 1px;
  transform: rotate(4deg);
}

.l6 {
  top: 62%;
  right: 14%;
  width: 32%;
  height: 1px;
  transform: rotate(-24deg);
}

.star {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f4e07e, #d4af37);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.65);
}

.star::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.25), transparent 50%);
}

.s1 {
  top: 18%;
  left: 22%;
}

.s2 {
  top: 24%;
  left: 46%;
}

.s3 {
  top: 32%;
  left: 62%;
}

.s4 {
  top: 46%;
  left: 38%;
}

.s5 {
  top: 50%;
  left: 68%;
}

.s6 {
  top: 58%;
  right: 14%;
}

.s7 {
  top: 38%;
  right: 20%;
}

.s8 {
  bottom: 18%;
  left: 28%;
}

.code-symbol {
  position: absolute;
  z-index: 1;
  color: rgba(212, 175, 55, 0.35);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.15);
}

.code-1 {
  top: 14%;
  left: 12%;
}

.code-2 {
  top: 10%;
  right: 18%;
}

.code-3 {
  bottom: 26%;
  right: 14%;
}

.code-4 {
  bottom: 12%;
  left: 20%;
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