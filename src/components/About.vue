<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">About Me</span>
        <h2>Entry-lvl Software Developer</h2>
      </div>
      
      <div class="about-grid">
        <div class="about-image">
          <div class="image-frame">
            <div class="about-constellation">
              <div class="constellation-core">WP</div>
              <div class="language-symbol js">JS</div>
              <div class="language-symbol vue">Vue</div>
              <div class="language-symbol html">HTML</div>
              <div class="language-symbol css">CSS</div>
              <div class="language-symbol py">Py</div>
              <div class="line l1"></div>
              <div class="line l2"></div>
              <div class="line l3"></div>
              <div class="line l4"></div>
              <div class="line l5"></div>
              <div class="star s1"></div>
              <div class="star s2"></div>
              <div class="star s3"></div>
              <div class="star s4"></div>
            </div>
          </div>
        </div>
        
        <div class="about-content">
          <p class="about-intro">
            I am a web developer with advanced experience in building 
            robust web applications. Based in Cape Town, I specialize in creating functional, 
            user‑centric digital solutions.
          </p>
          
          <div class="skills">
            <h4>Tech I Work With</h4>
            <div class="skills-grid">
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">SQL (MySQL & Oracle)</span>
              <span class="skill-tag">Oracle APEX</span>
              <span class="skill-tag">UI/UX Design</span>
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
              <span class="skill-tag">PHP</span>
              <span class="skill-tag">WordPress</span>
              <span class="skill-tag">Lua</span>
              <span class="skill-tag">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  border-top: 1px solid var(--border-subtle);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-frame {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-gold);
  border: 2px solid var(--border-subtle);
  transition: var(--transition);
  width: min(100%, 420px);
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.image-frame:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
}

.about-constellation {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 100%;
  min-height: 300px;
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

.language-symbol {
  position: absolute;
  z-index: 1;
  color: rgba(212, 175, 55, 0.35);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.15);
}

.language-symbol.js {
  top: 14%;
  left: 16%;
}

.language-symbol.vue {
  top: 10%;
  right: 16%;
}

.language-symbol.html {
  bottom: 26%;
  right: 16%;
}

.language-symbol.css {
  bottom: 12%;
  left: 22%;
}

.language-symbol.py {
  top: 62%;
  left: 32%;
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

.about-intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  line-height: 1.7;
}

.skills h4 {
  color: var(--accent);
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: rgba(26, 127, 107, 0.15);
  border: 1px solid var(--border-subtle);
  padding: 0.5rem 1.2rem;
  border-radius: 40px;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--accent-light);
  letter-spacing: 0.5px;
  transition: var(--transition);
}

.skill-tag:hover {
  background: var(--primary);
  border-color: var(--accent);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 1024px) and (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
  }
  
  .image-frame {
    max-width: 300px;
  }
  
  .about-intro {
    font-size: 1.1rem;
  }
  
  .skills h4 {
    font-size: 1rem;
  }
  
  .skill-tag {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .image-frame {
    max-width: 350px;
  }
}
</style>