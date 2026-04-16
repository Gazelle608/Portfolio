<template>
  <section class="projects" id="projects">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">My Projects</span>
        <h2>Recent Works</h2>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-icon-container">
            <i :class="project.icon" :style="{ color: project.iconColor }"></i>
            <div class="icon-background" :style="{ background: project.iconColor + '20' }"></div>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
            <div class="project-links">
              <a 
                :href="project.githubLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn btn-github"
              >
                <i class="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js'
</script>

<style scoped>
.projects {
  border-top: 1px solid var(--border-subtle);
  background: rgba(10, 26, 18, 0.5);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--border-subtle);
  transition: var(--transition);
  backdrop-filter: blur(10px);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: var(--shadow-gold);
}

.project-icon-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: 1.5rem;
}

.project-icon-container i {
  font-size: 3.5rem;
  z-index: 2;
  transition: var(--transition);
  color: var(--accent) !important;
}

.icon-background {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  z-index: 1;
  transition: var(--transition);
}

.project-card:hover .project-icon-container i {
  transform: scale(1.1) translateY(-5px);
}

.project-card:hover .icon-background {
  transform: scale(1.1);
  border-radius: 25px;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.project-info p {
  color: var(--text-light);
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.project-tag {
  background: rgba(26, 127, 107, 0.15);
  padding: 0.25rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--secondary);
  border: 1px solid var(--border-subtle);
  transition: var(--transition);
}

.project-tag:hover {
  background: var(--primary);
  color: white;
}

.project-links {
  margin-top: auto;
  display: flex;
  justify-content: center;
}

.project-links .btn {
  width: 100%;
}

@media (max-width: 1024px) and (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    padding: 1.8rem;
  }
  
  .project-icon-container {
    height: 100px;
  }
  
  .project-icon-container i {
    font-size: 3rem;
  }
  
  .icon-background {
    width: 80px;
    height: 80px;
  }
  
  .project-info h3 {
    font-size: 1.2rem;
  }
  
  .project-info p {
    font-size: 0.95rem;
  }
  
  .project-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.7rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>