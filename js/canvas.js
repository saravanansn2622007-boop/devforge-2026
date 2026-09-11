/* ==========================================================================
   DEVFORGE 2026 (DevForge '26)
   Interactive Canvas Engine: Golden Embers, Film Sprockets & Mouse Spotlights
   ========================================================================== */

class CinemaCanvasEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.sprockets = [];
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, radius: 250 };
    this.animationId = null;

    this.init();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  init() {
    this.resize();
    this.createParticles();
    this.createFilmSprockets();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    const count = Math.min(Math.floor(this.width * 0.04), 60);
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -Math.random() * 0.8 - 0.2, // Float upwards like cinematic golden sparks
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.3 ? '#ffbe1a' : '#ff4d61',
        glow: Math.random() * 8 + 4
      });
    }
  }

  createFilmSprockets() {
    const count = 12;
    this.sprockets = [];
    for (let i = 0; i < count; i++) {
      this.sprockets.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 18 + 12,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        speedY: -Math.random() * 0.3 - 0.1,
        opacity: Math.random() * 0.12 + 0.04
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Mouse-Reactive Stage Spotlight Beam
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';
    let spotColor = 'rgba(255, 190, 26, 0.08)';
    if (currentTheme === 'lcu') spotColor = 'rgba(230, 32, 53, 0.08)';
    if (currentTheme === 'chitti') spotColor = 'rgba(0, 240, 255, 0.08)';

    const spotGrad = this.ctx.createRadialGradient(
      this.mouse.x, this.mouse.y, 10,
      this.mouse.x, this.mouse.y, this.mouse.radius
    );
    spotGrad.addColorStop(0, spotColor);
    spotGrad.addColorStop(1, 'transparent');
    this.ctx.fillStyle = spotGrad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 2. Draw 35mm Film Sprocket Shapes
    this.sprockets.forEach(sprocket => {
      this.ctx.save();
      this.ctx.translate(sprocket.x, sprocket.y);
      this.ctx.rotate(sprocket.rotation);
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${sprocket.opacity})`;
      this.ctx.lineWidth = 1.5;
      
      // Draw a mini film frame box with perforations
      const s = sprocket.size;
      this.ctx.strokeRect(-s/2, -s/2, s, s);
      this.ctx.fillStyle = `rgba(255, 190, 26, ${sprocket.opacity * 0.6})`;
      this.ctx.fillRect(-s/2 + 2, -s/2 + 2, 3, 4);
      this.ctx.fillRect(s/2 - 5, -s/2 + 2, 3, 4);
      this.ctx.fillRect(-s/2 + 2, s/2 - 6, 3, 4);
      this.ctx.fillRect(s/2 - 5, s/2 - 6, 3, 4);
      
      this.ctx.restore();

      // Move
      sprocket.y += sprocket.speedY;
      sprocket.rotation += sprocket.rotSpeed;
      if (sprocket.y < -50) {
        sprocket.y = this.height + 50;
        sprocket.x = Math.random() * this.width;
      }
    });

    // 3. Draw Golden Cinematic Particles
    this.particles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = p.glow;
      this.ctx.shadowColor = p.color;
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fill();

      // Movement
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
    });

    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cinemaCanvas = new CinemaCanvasEngine('bg-canvas');
});
