<template>
  <div class="geometry-container">
    <div class="scene" ref="sceneRef">
      <!-- Ring 1 - Outer Emerald Ring -->
      <div class="ring ring-1">
        <div class="ring-face front"></div>
        <div class="ring-face back"></div>
        <div class="ring-face left"></div>
        <div class="ring-face right"></div>
      </div>
      
      <!-- Ring 2 - Inner Gold Ring (rotates opposite) -->
      <div class="ring ring-2">
        <div class="ring-face front"></div>
        <div class="ring-face back"></div>
        <div class="ring-face left"></div>
        <div class="ring-face right"></div>
      </div>
      
      <!-- Ring 3 - Diagonal Emerald Ring -->
      <div class="ring ring-3">
        <div class="ring-face front"></div>
        <div class="ring-face back"></div>
        <div class="ring-face left"></div>
        <div class="ring-face right"></div>
      </div>
      
      <!-- Ring 4 - Diagonal Gold Ring -->
      <div class="ring ring-4">
        <div class="ring-face front"></div>
        <div class="ring-face back"></div>
        <div class="ring-face left"></div>
        <div class="ring-face right"></div>
      </div>
      
      <!-- Center glowing sphere -->
      <div class="core-sphere">
        <div class="sphere-inner"></div>
      </div>
      
      <!-- Floating particles -->
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
      <div class="particle particle-6"></div>
    </div>
    <div class="geometry-shadow"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sceneRef = ref(null)

onMounted(() => {
  const container = document.querySelector('.geometry-container')
  const scene = sceneRef.value
  
  // Only add mouse interaction for desktop and tablet
  if (window.innerWidth > 767 && container && scene) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateY = ((x - centerX) / centerX) * 20
      const rotateX = ((y - centerY) / centerY) * -20
      
      scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
    
    container.addEventListener('mouseleave', () => {
      scene.style.transform = 'rotateX(-15deg) rotateY(15deg)'
    })
  }
})
</script>

<style scoped>
.geometry-container {
  width: 400px;
  height: 400px;
  perspective: 1200px;
  position: relative;
  margin: 0 auto;
}

.scene {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(15deg);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  animation: float 8s ease-in-out infinite;
}

/* Base Ring Styles */
.ring {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
}

.ring-face {
  position: absolute;
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  border-radius: 20px;
  background: transparent;
  border-width: 4px;
  border-style: solid;
  box-sizing: border-box;
  backdrop-filter: blur(2px);
}

/* Ring 1 - Outer Emerald (Horizontal/Vertical) */
.ring-1 {
  animation: rotate-ring-1 12s linear infinite;
}

.ring-1 .ring-face {
  border-color: var(--primary);
  box-shadow: 
    0 0 30px rgba(15, 92, 75, 0.6),
    inset 0 0 20px rgba(15, 92, 75, 0.3);
}

.ring-1 .front {
  transform: rotateY(0deg) translateZ(160px);
  background: linear-gradient(135deg, rgba(15, 92, 75, 0.08), rgba(26, 127, 107, 0.15));
}

.ring-1 .back {
  transform: rotateY(180deg) translateZ(160px);
  background: linear-gradient(135deg, rgba(15, 92, 75, 0.08), rgba(26, 127, 107, 0.15));
}

.ring-1 .left {
  transform: rotateY(-90deg) translateZ(160px);
  background: linear-gradient(135deg, rgba(15, 92, 75, 0.08), rgba(26, 127, 107, 0.15));
}

.ring-1 .right {
  transform: rotateY(90deg) translateZ(160px);
  background: linear-gradient(135deg, rgba(15, 92, 75, 0.08), rgba(26, 127, 107, 0.15));
}

/* Ring 2 - Inner Gold (rotates opposite) */
.ring-2 {
  animation: rotate-ring-2 10s linear infinite;
}

.ring-2 .ring-face {
  width: 240px;
  height: 240px;
  margin-left: -120px;
  margin-top: -120px;
  border-color: var(--accent);
  box-shadow: 
    0 0 30px rgba(212, 175, 55, 0.6),
    inset 0 0 20px rgba(212, 175, 55, 0.3);
}

.ring-2 .front {
  transform: rotateY(0deg) translateZ(120px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(243, 229, 171, 0.1));
}

.ring-2 .back {
  transform: rotateY(180deg) translateZ(120px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(243, 229, 171, 0.1));
}

.ring-2 .left {
  transform: rotateY(-90deg) translateZ(120px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(243, 229, 171, 0.1));
}

.ring-2 .right {
  transform: rotateY(90deg) translateZ(120px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(243, 229, 171, 0.1));
}

/* Ring 3 - Diagonal Emerald */
.ring-3 {
  animation: rotate-ring-3 14s linear infinite;
}

.ring-3 .ring-face {
  width: 288px;
  height: 288px;
  margin-left: -144px;
  margin-top: -144px;
  border-color: var(--secondary);
  border-radius: 30px;
  box-shadow: 
    0 0 25px rgba(42, 157, 143, 0.5),
    inset 0 0 15px rgba(42, 157, 143, 0.2);
}

.ring-3 .front {
  transform: rotateX(45deg) rotateZ(45deg) translateZ(144px);
  background: linear-gradient(135deg, rgba(42, 157, 143, 0.06), rgba(61, 184, 158, 0.12));
}

.ring-3 .back {
  transform: rotateX(45deg) rotateZ(45deg) rotateY(180deg) translateZ(144px);
  background: linear-gradient(135deg, rgba(42, 157, 143, 0.06), rgba(61, 184, 158, 0.12));
}

.ring-3 .left {
  transform: rotateX(45deg) rotateZ(45deg) rotateY(-90deg) translateZ(144px);
  background: linear-gradient(135deg, rgba(42, 157, 143, 0.06), rgba(61, 184, 158, 0.12));
}

.ring-3 .right {
  transform: rotateX(45deg) rotateZ(45deg) rotateY(90deg) translateZ(144px);
  background: linear-gradient(135deg, rgba(42, 157, 143, 0.06), rgba(61, 184, 158, 0.12));
}

/* Ring 4 - Diagonal Gold */
.ring-4 {
  animation: rotate-ring-4 16s linear infinite;
}

.ring-4 .ring-face {
  width: 192px;
  height: 192px;
  margin-left: -96px;
  margin-top: -96px;
  border-color: var(--accent-light);
  border-radius: 25px;
  box-shadow: 
    0 0 25px rgba(243, 229, 171, 0.4),
    inset 0 0 15px rgba(243, 229, 171, 0.2);
}

.ring-4 .front {
  transform: rotateX(-45deg) rotateZ(-30deg) translateZ(96px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.04), rgba(243, 229, 171, 0.08));
}

.ring-4 .back {
  transform: rotateX(-45deg) rotateZ(-30deg) rotateY(180deg) translateZ(96px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.04), rgba(243, 229, 171, 0.08));
}

.ring-4 .left {
  transform: rotateX(-45deg) rotateZ(-30deg) rotateY(-90deg) translateZ(96px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.04), rgba(243, 229, 171, 0.08));
}

.ring-4 .right {
  transform: rotateX(-45deg) rotateZ(-30deg) rotateY(90deg) translateZ(96px);
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.04), rgba(243, 229, 171, 0.08));
}

/* Core Sphere */
.core-sphere {
  position: absolute;
  width: 72px;
  height: 72px;
  top: 50%;
  left: 50%;
  margin-left: -36px;
  margin-top: -36px;
  transform-style: preserve-3d;
  animation: pulse-core 3s ease-in-out infinite;
}

.sphere-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--accent), var(--primary));
  box-shadow: 
    0 0 40px rgba(212, 175, 55, 0.8),
    inset 0 0 20px rgba(255, 255, 255, 0.3);
  border: 2px solid var(--accent-light);
}

/* Floating Particles */
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 15px var(--accent);
  animation: float-particle 4s ease-in-out infinite;
}

.particle-1 {
  top: 10%;
  left: 20%;
  background: var(--primary-light);
  animation-delay: 0s;
}

.particle-2 {
  top: 80%;
  left: 70%;
  background: var(--accent);
  animation-delay: 0.5s;
}

.particle-3 {
  top: 30%;
  left: 85%;
  background: var(--secondary);
  animation-delay: 1s;
}

.particle-4 {
  top: 70%;
  left: 15%;
  background: var(--accent-light);
  animation-delay: 1.5s;
}

.particle-5 {
  top: 50%;
  left: 90%;
  background: var(--primary);
  animation-delay: 2s;
}

.particle-6 {
  top: 15%;
  left: 60%;
  background: var(--accent);
  animation-delay: 2.5s;
}

/* Shadow */
.geometry-shadow {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 264px;
  height: 25px;
  background: radial-gradient(ellipse at center, rgba(42, 157, 143, 0.35) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(12px);
  animation: shadow-pulse 8s ease-in-out infinite;
}

/* Animations */
@keyframes rotate-ring-1 {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes rotate-ring-2 {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(-360deg) rotateY(-360deg); }
}

@keyframes rotate-ring-3 {
  0% { transform: rotateZ(0deg) rotateX(0deg); }
  100% { transform: rotateZ(360deg) rotateX(360deg); }
}

@keyframes rotate-ring-4 {
  0% { transform: rotateZ(0deg) rotateX(0deg); }
  100% { transform: rotateZ(-360deg) rotateX(-360deg); }
}

@keyframes float {
  0%, 100% {
    transform: rotateX(-15deg) rotateY(15deg) translateY(0);
  }
  50% {
    transform: rotateX(-10deg) rotateY(20deg) translateY(-15px);
  }
}

@keyframes pulse-core {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.9;
  }
}

@keyframes float-particle {
  0%, 100% {
    transform: translateY(0) translateZ(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) translateZ(30px);
    opacity: 1;
  }
}

@keyframes shadow-pulse {
  0%, 100% {
    opacity: 0.4;
    width: 220px;
  }
  50% {
    opacity: 0.2;
    width: 180px;
  }
}

/* Pause animations on hover */
.geometry-container:hover .scene {
  animation-play-state: paused;
}

.geometry-container:hover .ring {
  animation-play-state: paused;
}

.geometry-container:hover .core-sphere {
  animation-play-state: paused;
}

.geometry-container:hover .particle {
  animation-play-state: paused;
}

.geometry-container:hover .geometry-shadow {
  animation-play-state: paused;
}

/* Responsive */
@media (max-width: 1024px) and (min-width: 768px) {
  .geometry-container {
    width: 320px;
    height: 320px;
  }
  
  .ring-face {
    width: 256px;
    height: 256px;
    margin-left: -128px;
    margin-top: -128px;
  }
  
  .ring-1 .front { transform: rotateY(0deg) translateZ(128px); }
  .ring-1 .back { transform: rotateY(180deg) translateZ(128px); }
  .ring-1 .left { transform: rotateY(-90deg) translateZ(128px); }
  .ring-1 .right { transform: rotateY(90deg) translateZ(128px); }
  
  .ring-2 .ring-face {
    width: 192px;
    height: 192px;
    margin-left: -96px;
    margin-top: -96px;
  }
  
  .ring-2 .front { transform: rotateY(0deg) translateZ(96px); }
  .ring-2 .back { transform: rotateY(180deg) translateZ(96px); }
  .ring-2 .left { transform: rotateY(-90deg) translateZ(96px); }
  .ring-2 .right { transform: rotateY(90deg) translateZ(96px); }
  
  .ring-3 .ring-face {
    width: 230px;
    height: 230px;
    margin-left: -115px;
    margin-top: -115px;
  }
  
  .ring-3 .front { transform: rotateX(45deg) rotateZ(45deg) translateZ(115px); }
  .ring-3 .back { transform: rotateX(45deg) rotateZ(45deg) rotateY(180deg) translateZ(115px); }
  .ring-3 .left { transform: rotateX(45deg) rotateZ(45deg) rotateY(-90deg) translateZ(115px); }
  .ring-3 .right { transform: rotateX(45deg) rotateZ(45deg) rotateY(90deg) translateZ(115px); }
  
  .ring-4 .ring-face {
    width: 154px;
    height: 154px;
    margin-left: -77px;
    margin-top: -77px;
  }
  
  .ring-4 .front { transform: rotateX(-45deg) rotateZ(-30deg) translateZ(77px); }
  .ring-4 .back { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(180deg) translateZ(77px); }
  .ring-4 .left { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(-90deg) translateZ(77px); }
  .ring-4 .right { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(90deg) translateZ(77px); }
  
  .core-sphere {
    width: 58px;
    height: 58px;
    margin-left: -29px;
    margin-top: -29px;
  }
  
  .geometry-shadow {
    width: 211px;
  }
}

@media (max-width: 767px) {
  .geometry-container {
    width: 280px;
    height: 280px;
    display: none;
  }
  
  .ring-face {
    width: 220px;
    height: 220px;
    margin-left: -110px;
    margin-top: -110px;
  }
  
  .ring-1 .front { transform: rotateY(0deg) translateZ(110px); }
  .ring-1 .back { transform: rotateY(180deg) translateZ(110px); }
  .ring-1 .left { transform: rotateY(-90deg) translateZ(110px); }
  .ring-1 .right { transform: rotateY(90deg) translateZ(110px); }
  
  .ring-2 .ring-face {
    width: 160px;
    height: 160px;
    margin-left: -80px;
    margin-top: -80px;
  }
  
  .ring-2 .front { transform: rotateY(0deg) translateZ(80px); }
  .ring-2 .back { transform: rotateY(180deg) translateZ(80px); }
  .ring-2 .left { transform: rotateY(-90deg) translateZ(80px); }
  .ring-2 .right { transform: rotateY(90deg) translateZ(80px); }
  
  .ring-3 .ring-face {
    width: 190px;
    height: 190px;
    margin-left: -95px;
    margin-top: -95px;
  }
  
  .ring-3 .front { transform: rotateX(45deg) rotateZ(45deg) translateZ(95px); }
  .ring-3 .back { transform: rotateX(45deg) rotateZ(45deg) rotateY(180deg) translateZ(95px); }
  .ring-3 .left { transform: rotateX(45deg) rotateZ(45deg) rotateY(-90deg) translateZ(95px); }
  .ring-3 .right { transform: rotateX(45deg) rotateZ(45deg) rotateY(90deg) translateZ(95px); }
  
  .ring-4 .ring-face {
    width: 130px;
    height: 130px;
    margin-left: -65px;
    margin-top: -65px;
  }
  
  .ring-4 .front { transform: rotateX(-45deg) rotateZ(-30deg) translateZ(65px); }
  .ring-4 .back { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(180deg) translateZ(65px); }
  .ring-4 .left { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(-90deg) translateZ(65px); }
  .ring-4 .right { transform: rotateX(-45deg) rotateZ(-30deg) rotateY(90deg) translateZ(65px); }
  
  .core-sphere {
    width: 45px;
    height: 45px;
    margin-left: -22.5px;
    margin-top: -22.5px;
  }
  
  .geometry-shadow {
    width: 183px;
  }
  
  /* Disable animations on mobile */
  .scene,
  .ring,
  .core-sphere,
  .particle,
  .geometry-shadow {
    animation: none !important;
  }
}
</style>