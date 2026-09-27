document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('focus', () => {
      link.style.opacity = '1';
    });

    link.addEventListener('blur', () => {
      link.style.opacity = '';
    });
  });
});
