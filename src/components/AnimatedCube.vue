<template>
  <div class="shape-container">
    <div class="rotating-shape">
      <svg viewBox="0 0 200 200" class="shape-svg">
        <!-- Rotating outer ring -->
        <circle 
          cx="100" 
          cy="100" 
          r="80" 
          fill="none" 
          stroke="url(#emeraldGradient)" 
          stroke-width="3"
          stroke-dasharray="200 300"
          class="outer-ring"
        />
        
        <!-- Gold ring -->
        <circle 
          cx="100" 
          cy="100" 
          r="65" 
          fill="none" 
          stroke="url(#goldGradient)" 
          stroke-width="2"
          stroke-dasharray="150 250"
          class="gold-ring"
        />
        
        <!-- Emerald hexagon -->
        <polygon 
          points="100,40 152,70 152,130 100,160 48,130 48,70" 
          fill="none" 
          stroke="url(#emeraldGradient)" 
          stroke-width="2.5"
          class="hexagon"
        />
        
        <!-- Gold diamond -->
        <polygon 
          points="100,55 145,100 100,145 55,100" 
          fill="none" 
          stroke="url(#goldGradient)" 
          stroke-width="2"
          class="diamond"
        />
        
        <!-- Center icon -->
        <text x="100" y="108" text-anchor="middle" class="center-icon">
          <i class="fas fa-code"></i>
        </text>
        
        <!-- Gradients -->
        <defs>
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f5c4b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2a9d8f;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#d4af37;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f3e5ab;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    <!-- Floating particles -->
    <div class="particles">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
      <div class="particle particle-6"></div>
    </div>
    
    <div class="shape-shadow"></div>
  </div>
</template>

<script setup>
// No heavy JavaScript needed - pure CSS animations
</script>

<style scoped>
.shape-container {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rotating-shape {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 4s ease-in-out infinite;
}

.shape-svg {
  width: 250px;
  height: 250px;
  filter: drop-shadow(0 0 20px rgba(42, 157, 143, 0.4));
}

/* Smooth rotations */
.outer-ring {
  animation: rotate 20s linear infinite;
  transform-origin: 100px 100px;
}

.gold-ring {
  animation: rotate-reverse 15s linear infinite;
  transform-origin: 100px 100px;
}

.hexagon {
  animation: rotate 12s ease-in-out infinite;
  transform-origin: 100px 100px;
}

.diamond {
  animation: rotate-reverse 8s ease-in-out infinite;
  transform-origin: 100px 100px;
}

.center-icon {
  font-size: 48px;
  fill: var(--accent);
  dominant-baseline: middle;
  animation: pulse 3s ease-in-out infinite;
}

.center-icon i {
  color: var(--accent);
}

/* Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.6;
  filter: blur(1px);
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: particleFloat 6s ease-in-out infinite;
  background: var(--primary-light);
}

.particle-2 {
  top: 70%;
  right: 15%;
  animation: particleFloat 8s ease-in-out infinite 1s;
  background: var(--accent);
}

.particle-3 {
  bottom: 15%;
  left: 20%;
  animation: particleFloat 7s ease-in-out infinite 2s;
  background: var(--secondary);
}

.particle-4 {
  top: 40%;
  right: 20%;
  width: 4px;
  height: 4px;
  animation: particleFloat 5s ease-in-out infinite 0.5s;
  background: var(--accent-light);
}

.particle-5 {
  bottom: 30%;
  right: 30%;
  width: 5px;
  height: 5px;
  animation: particleFloat 9s ease-in-out infinite 1.5s;
  background: var(--primary);
}

.particle-6 {
  top: 60%;
  left: 25%;
  width: 3px;
  height: 3px;
  animation: particleFloat 4s ease-in-out infinite 3s;
  background: var(--accent);
}

.shape-shadow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 15px;
  background: radial-gradient(ellipse at center, rgba(42, 157, 143, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(8px);
  animation: shadowPulse 4s ease-in-out infinite;
}

/* Animations */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
  25% {
    transform: translate(-10px, -15px);
    opacity: 1;
  }
  50% {
    transform: translate(10px, -25px);
    opacity: 0.4;
  }
  75% {
    transform: translate(-5px, -10px);
    opacity: 0.8;
  }
}

@keyframes shadowPulse {
  0%, 100% {
    opacity: 0.3;
    width: 180px;
  }
  50% {
    opacity: 0.15;
    width: 140px;
  }
}

/* Hover effect - smooth pause */
.shape-container:hover .rotating-shape {
  animation-play-state: paused;
}

.shape-container:hover .outer-ring,
.shape-container:hover .gold-ring,
.shape-container:hover .hexagon,
.shape-container:hover .diamond {
  animation-play-state: running;
}

/* Responsive */
@media (max-width: 500px) {
  .shape-container {
    width: 250px;
    height: 250px;
  }
  
  .shape-svg {
    width: 200px;
    height: 200px;
  }
  
  .center-icon {
    font-size: 40px;
  }
}
</style>