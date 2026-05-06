(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA || { skills: [], projects: [] };
  const INITIAL_PROJECTS = null;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    renderSkills();
    renderProjects(INITIAL_PROJECTS);
    renderExperience();
    drawConstellation();

    setupNavbarScroll();
    setupSmoothScroll();
    setupActiveNavObserver();
    setupMobileDrawer();
    setupViewMore();
    setupContactForm();
    setupScrollAnimations();
  }

  function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    const groups = {};
    data.skills.forEach(s => {
      const cat = s.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(s);
    });

    container.innerHTML = Object.entries(groups).map(([cat, skills], gi) => `
      <div class="skill-group reveal from-bottom" style="transition-delay:${gi * 0.07}s">
        <h3 class="skill-group-title">${escapeHtml(cat)}</h3>
        <div class="skill-group-cards">
          ${skills.map(s => {
            let iconHtml;
            if (s.slug) {
              const color = s.color || 'cbd5e1';
              iconHtml = `<img class="icon" src="https://cdn.simpleicons.org/${encodeURIComponent(s.slug)}/${color}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='block')" />`;
            } else if (s.fa) {
              iconHtml = `<i class="${escapeHtml(s.fa)} icon fa-icon"></i>`;
            } else {
              iconHtml = `<span class="icon skill-lbl">${escapeHtml(s.name.slice(0, 2).toUpperCase())}</span>`;
            }
            return `
              <div class="skill-card" title="${escapeHtml(s.name)}">
                ${iconHtml}
                <span class="name">${escapeHtml(s.name)}</span>
              </div>`;
          }).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderProjects(limit) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const items = (limit ? data.projects.slice(0, limit) : data.projects);
    grid.innerHTML = items.map((p, i) => `
      <article class="project-card reveal from-bottom" style="transition-delay:${i * 0.1}s">
        <div class="project-cover${p.images && p.images.length ? ' project-cover--images' : p.image ? ' project-cover--image' : ''}">
          ${p.images && p.images.length
            ? p.images.map(src => `<img src="${src}" alt="${escapeHtml(p.title)} screenshot" class="project-cover-img" />`).join('')
            : p.image
              ? `<img src="${p.image}" alt="${escapeHtml(p.title)} screenshot" class="project-cover-img" />`
              : `<span class="project-cover-text">${escapeHtml(p.title)}</span>`
          }
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(p.title)}${p.country ? ` <img class="project-flag" src="https://flagcdn.com/w40/${escapeHtml(p.country.toLowerCase())}.png" alt="${escapeHtml(p.country)} flag" />` : ''}</h3>
          <p class="project-subtitle">${escapeHtml(p.subtitle)}</p>
          <p class="project-stack">${escapeHtml(p.stack)}</p>
          <p class="project-desc">${escapeHtml(p.desc)}</p>
          ${p.links && p.links.length ? `
            <div class="project-links">
              ${p.links.map(l => `
                <a class="project-link" href="${l.url}" target="_blank" rel="noopener">
                  <i class="${l.icon}"></i> ${escapeHtml(l.label)}
                </a>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `).join('');
  }

  function renderExperience() {
    const container = document.getElementById('experienceTimeline');
    if (!container) return;
    const items = data.experience || [];
    container.innerHTML = items.map((exp, i) => `
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          ${i < items.length - 1 ? '<div class="timeline-line"></div>' : ''}
        </div>
        <div class="timeline-card reveal from-left" style="transition-delay:${i * 0.15}s">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
              <p class="timeline-company">${escapeHtml(exp.company)}</p>
            </div>
            <div class="timeline-meta">
              <span class="timeline-period"><i class="fa-regular fa-calendar"></i> ${escapeHtml(exp.period)}</span>
              <span class="timeline-location"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(exp.location)}</span>
            </div>
          </div>
          <ul class="timeline-bullets">
            ${exp.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  function drawConstellation() {
    const svg = document.querySelector('.constellation');
    if (!svg) return;
    const linesGroup = svg.querySelector('.lines');
    const ringsGroup = svg.querySelector('.rings');
    const cx = 300, cy = 300;

    const outerR = 228;
    let lines = '';
    const spokes = 12;
    for (let i = 0; i < spokes; i++) {
      const a = (i / spokes) * Math.PI * 2;
      const x2 = cx + Math.cos(a) * outerR;
      const y2 = cy + Math.sin(a) * outerR;
      lines += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" />`;
    }
    linesGroup.innerHTML = lines;

    const radii = [60, 120, 174, 228];
    let rings = '';
    rings += `<circle cx="${cx}" cy="${cy}" r="8" class="ring-center" />`;
    radii.forEach((r, idx) => {
      rings += `<circle cx="${cx}" cy="${cy}" r="${r}" class="ring-r${idx}" />`;
    });
    ringsGroup.innerHTML = rings;
  }

  function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: 'smooth' });
        closeDrawer();
      });
    });
  }

  function setupActiveNavObserver() {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const links = document.querySelectorAll('.nav-link[data-section]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => {
            l.classList.toggle('active', l.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  function setupMobileDrawer() {
    const btn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('drawerClose');
    const drawer = document.getElementById('mobileDrawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
    });
    closeBtn?.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('.drawer-link').forEach(a => {
      a.addEventListener('click', closeDrawer);
    });
  }

  function closeDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  function setupViewMore() {
    const btn = document.getElementById('viewMoreBtn');
    if (!btn) return;
    let expanded = false;
    btn.addEventListener('click', () => {
      expanded = !expanded;
      renderProjects(expanded ? null : INITIAL_PROJECTS);
      btn.textContent = expanded ? 'Show Less' : 'View More Projects';
      if (!expanded) {
        document.getElementById('projects')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const EMAILJS_PUBLIC_KEY  = 'FgqaoKJIldNgaT5af';
  const EMAILJS_SERVICE_ID  = 'service_a0z0yu6';
  const EMAILJS_TEMPLATE_ID = 'template_8z08xx9';

  function setupContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const submitBtn = form?.querySelector('.submit-btn');
    if (!form) return;

    if (typeof emailjs !== 'undefined') {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.classList.remove('success', 'error');

      const required = ['fullName', 'email', 'subject', 'message'];
      const missing = required.find(id => !form.querySelector(`#${id}`)?.value.trim());
      const emailValue = form.querySelector('#email')?.value.trim() || '';
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

      if (missing) {
        status.textContent = 'Please fill in all required fields.';
        status.classList.add('error');
        return;
      }
      if (!emailOk) {
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('error');
        return;
      }

      if (typeof emailjs === 'undefined') {
        status.textContent = 'Email service unavailable. Please try again later.';
        status.classList.add('error');
        return;
      }

      const phone = form.querySelector('#phoneCode')?.value.trim() + ' ' + (form.querySelector('#phone')?.value.trim() || '');

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending… <i class="fa-solid fa-spinner fa-spin"></i>';

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name:    form.querySelector('#fullName').value.trim(),
          from_email:   emailValue,
          phone:        phone.trim(),
          subject:      form.querySelector('#subject').value.trim(),
          message:      form.querySelector('#message').value.trim(),
        });

        status.textContent = 'Thanks! Your message has been sent.';
        status.classList.add('success');
        form.reset();
        const phoneCode = form.querySelector('#phoneCode');
        if (phoneCode) phoneCode.value = '+1';
      } catch (err) {
        status.textContent = 'Something went wrong. Please try again.';
        status.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      }
    });
  }

  function setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '120px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-fade').forEach((el) => {
      observer.observe(el);
    });
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
})();
