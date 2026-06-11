/* =============================================
   SONNY ALBANO — main.js
   Scroll effects, nav, animations, form
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky Nav ---- */
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---- Mobile Nav Toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });

  /* ---- Scroll Animations ---- */
  const animateElements = document.querySelectorAll(
    '.award-card, .service-card, .pillar, .shop-card, .timeline-item, .contact-item'
  );
  animateElements.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position among siblings
        const siblings = [...entry.target.parentElement.children];
        const index = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animateElements.forEach(el => observer.observe(el));

  /* ---- Smooth active nav highlight ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinksAll.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--lime)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ---- Contact Form ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate send (replace with real backend/formspree/netlify)
      setTimeout(() => {
        btn.textContent = '✓ Message Sent! Sonny will be in touch soon.';
        btn.style.background = '#22c55e';
        btn.style.color = '#fff';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
          form.reset();
        }, 4000);
      }, 1200);
    });
  }

  /* ---- Parallax subtle hero ---- */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const courtLines = hero.querySelector('.hero-court-lines');
      if (courtLines) {
        courtLines.style.transform = `translateY(${y * 0.25}px)`;
      }
    }, { passive: true });
  }

  /* ---- Stats counter animation ---- */
  const statNums = document.querySelectorAll('.stat-num');
  const statsBar = document.querySelector('.stats-bar');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNums.forEach(el => {
        const target = parseInt(el.textContent);
        if (!isNaN(target)) {
          let current = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.innerHTML = el.innerHTML; // keep original (includes + spans)
              clearInterval(timer);
            } else {
              const plus = el.querySelector('.stat-plus');
              el.textContent = Math.floor(current).toString();
              if (plus) el.appendChild(plus);
            }
          }, 30);
        }
      });
    }
  }, { threshold: 0.5 });

  if (statsBar) statsObserver.observe(statsBar);

});
