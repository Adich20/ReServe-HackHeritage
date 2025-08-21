// Mobile Menu Toggle
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
btn?.addEventListener('click', ()=> menu.classList.toggle('hidden'));

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle?.addEventListener('click', ()=> {
  document.documentElement.classList.toggle('dark');
});

// Impact Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace(/[^0-9.]/g, '') || 0;
    const increment = target / 100;
    if(current < target) {
      counter.innerText = (current + increment).toFixed(0) + (counter.innerText.includes('%') ? '%' : '');
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
    }
  }
  updateCount();
});

// Signup Form Validation
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('pass').value;
  const confirm = document.getElementById('confirm').value;
  if(pass !== confirm){
    alert('Passwords do not match!');
    return;
  }
  alert('Account created successfully! (Demo)');
});
