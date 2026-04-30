// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const navResume = document.querySelector('.nav-resume-btn');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(5,10,20,0.97)';
        navLinks.style.padding = '1.5rem 2rem';
        navLinks.style.borderBottom = '1px solid rgba(99,155,255,0.1)';
        navLinks.style.gap = '1.2rem';
    }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
    '.project-card, .skill-group, .about-card, .about-bio, .about-pills, .section-heading, .section-sub, .contact-form, .contact-link, .contact-desc, .resume-dl-btn'
);
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => observer.observe(el));

// ===== STAGGERED CARD REVEAL =====
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            siblings.forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 100);
            });
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 });

document.querySelectorAll('.projects-grid, .skills-grid').forEach(grid => {
    const firstChild = grid.querySelector('.reveal');
    if (firstChild) cardObserver.observe(firstChild);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) {
            current = sec.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}`
            ? 'var(--accent)'
            : 'var(--text-secondary)';
    });
});

// ===== CONTACT FORM =====
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showStatus('Please fill in all fields.', 'error');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    statusEl.className = 'form-status';
    statusEl.textContent = '';

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });
        const data = await res.json();
        if (data.success) {
            showStatus('✓ Message sent! I\'ll be in touch soon.', 'success');
            form.reset();
        } else {
            showStatus(data.error || 'Something went wrong. Please try again.', 'error');
        }
    } catch (err) {
        showStatus('Network error. Please try again later.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
    }
});

function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = `form-status ${type}`;
}

// ===== SMOOTH NAV SCROLL CLOSE (mobile) =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 900) {
            navLinks.style.display = 'none';
        }
    });
});

// ===== CURSOR GLOW (desktop) =====
if (window.innerWidth > 900) {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed; width: 300px; height: 300px;
        border-radius: 50%; pointer-events: none; z-index: 0;
        background: radial-gradient(circle, rgba(79,142,255,0.06) 0%, transparent 70%);
        transition: transform 0.15s ease; top: -150px; left: -150px;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}
