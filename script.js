const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Website inquiry';
    const message = document.getElementById('message').value.trim();

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      '',
      message
    ].join('\n');

    window.location.href = `mailto:chinabeachwok@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
