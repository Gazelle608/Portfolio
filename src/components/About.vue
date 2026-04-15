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
            <img src="/images/pfp.png" alt="Gazelle Pearson">
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
}

.image-frame:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
}

.image-frame img {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--transition);
}

.image-frame:hover img {
  transform: scale(1.05);
}

.about-intro {
  font-size: 1.2rem;
  color: var(--text);
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