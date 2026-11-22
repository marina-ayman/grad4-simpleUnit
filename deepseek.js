/* ============ SCROLL REVEAL ============ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* ============ COUNTER ANIMATION ============ */
const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || '+';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString() + suffix;
          }
        };
        updateCounter();
      });
    }
  });
}, { threshold: 0.5 });

const statsBox = document.querySelector('.stats-box');
if (statsBox) counterObserver.observe(statsBox);

/* ============ DOTS NAV ============ */
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

/* ============ MOBILE MENU ============ */
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'white';
  navLinks.style.padding = '20px';
  navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
  navLinks.style.borderRadius = '0 0 20px 20px';
  mobileToggle.textContent = isOpen ? '☰' : '✕';
});

/* ============ SMOOTH PARALLAX ON HERO SHAPES ============ */
document.addEventListener('mousemove', (e) => {
  const shapes = document.querySelectorAll('.shape');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  shapes.forEach((shape, i) => {
    const factor = (i + 1) * 0.5;
    shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

/* ============ BUTTON RIPPLE ============ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const circle = document.createElement('span');
    circle.style.position = 'absolute';
    circle.style.width = circle.style.height = '20px';
    circle.style.background = 'rgba(255,255,255,0.5)';
    circle.style.borderRadius = '50%';
    circle.style.left = (e.clientX - rect.left) + 'px';
    circle.style.top = (e.clientY - rect.top) + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    circle.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    circle.style.pointerEvents = 'none';
    this.appendChild(circle);
    requestAnimationFrame(() => {
      circle.style.transform = 'translate(-50%, -50%) scale(15)';
      circle.style.opacity = '0';
    });
    setTimeout(() => circle.remove(), 700);
  });
});
