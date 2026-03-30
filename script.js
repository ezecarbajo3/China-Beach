const navLinks = document.querySelectorAll('.nav-links a');
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || !targetId.startsWith('#')) return;

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});
