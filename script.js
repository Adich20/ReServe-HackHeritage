// Mobile Menu Toggle
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
btn?.addEventListener('click', () => menu.classList.toggle('hidden'));

// Dark Mode Toggle (persist + icon swap)
const darkToggle = document.getElementById('darkToggle');

function applyIcon() {
  if (!darkToggle) return;
  const isDark = document.documentElement.classList.contains('dark');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  darkToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function setTheme(next) {
  const root = document.documentElement;
  if (next === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  try { localStorage.setItem('theme', next); } catch (e) {}
  applyIcon();
}

darkToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// Initialize icon on load (class was already applied in <head> to prevent flash)
applyIcon();

// Impact Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace(/[^0-9.]/g, '') || 0;
    const steps = 100;
    const increment = (target - current) / Math.max(steps, 1);
    const hasPercent = counter.textContent.includes('%');

    if ((increment > 0 && current < target) || (increment < 0 && current > target)) {
      const next = current + increment;
      counter.innerText = (Number.isInteger(target) ? Math.round(next) : next.toFixed(1)) + (hasPercent ? '%' : '');
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = (Number.isInteger(target) ? target : target.toFixed(1)) + (hasPercent ? '%' : '');
    }
  };
  updateCount();
});

// Signup Form Validation
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('pass').value;
  const confirm = document.getElementById('confirm').value;
  if (pass !== confirm) {
    alert('Passwords do not match!');
    return;
  }
  alert('Account created successfully! (Demo)');
});
