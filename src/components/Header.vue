<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      activeSection: '',
      navItems: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ]
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    scrollToSection(id) {
      this.activeSection = id;
      this.isMenuOpen = false;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
  <header class="header glass-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <span class="logo">Gazelle.</span>
      
      <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
      
      <nav :class="['nav-links', { active: isMenuOpen }]">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="scrollToSection(item.id)"
          :class="{ active: activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s ease;
}

.glass-header {
  background: rgba(6, 18, 8, 0.3);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
}

.header.scrolled {
  background: rgba(6, 18, 8, 0.85);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--accent);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.container {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #f3e5ab 0%, var(--accent) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  color: var(--text-light);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-light), var(--accent));
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--accent);
  transition: var(--transition);
}

.menu-toggle:hover {
  color: var(--accent-light);
  transform: scale(1.1);
}

@media (max-width: 1024px) and (min-width: 768px) {
  .header-inner {
    padding: 1rem 0;
  }
  
  .logo {
    font-size: 1.6rem;
  }
  
  .nav-links {
    gap: 2rem;
  }
  
  .nav-links a {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(6, 18, 8, 0.95);
    backdrop-filter: blur(15px);
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform: translateY(-150%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-bottom: 2px solid var(--accent);
  }
  
  .nav-links.active {
    transform: translateY(0);
  }
}
</style>