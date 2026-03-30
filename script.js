const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filters = document.querySelectorAll('.review-filter');
const reviewCards = document.querySelectorAll('.review-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    reviewCards.forEach(card => {
      const tags = card.dataset.tag || '';
      const shouldShow = filter === 'all' || tags.includes(filter);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const menuModal = document.getElementById('menu-modal');
const openMenuButtons = document.querySelectorAll('[data-open-menu]');
const closeMenuButton = document.querySelector('[data-close-menu]');
const previewImage = document.querySelector('.menu-image-card img');

const openMenu = () => menuModal?.showModal();
const closeMenu = () => menuModal?.close();

openMenuButtons.forEach(button => button.addEventListener('click', openMenu));
previewImage?.addEventListener('click', openMenu);
closeMenuButton?.addEventListener('click', closeMenu);

menuModal?.addEventListener('click', event => {
  const rect = menuModal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) closeMenu();
});

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name')?.toString().trim() || '';
  const phone = data.get('phone')?.toString().trim() || '';
  const email = data.get('email')?.toString().trim() || '';
  const subject = data.get('subject')?.toString().trim() || 'Website inquiry';
  const message = data.get('message')?.toString().trim() || '';

  const mailSubject = encodeURIComponent(`${subject} - ${name}`);
  const mailBody = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  if (formNote) {
    formNote.textContent = 'Opening your email app with a prefilled message.';
  }

  window.location.href = `mailto:info@chinabeach.example?subject=${mailSubject}&body=${mailBody}`;
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach(section => observer.observe(section));
