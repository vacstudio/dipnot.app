// FAQ
document.querySelectorAll('#faq .card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    const content = card.querySelector('.faq-content');
    const icon = card.querySelector('.faq-icon');

    content.classList.toggle('is-hidden');
    icon.classList.toggle('is-rotated');
  });
});

// Mobile navbar toggle (Bulma)
document.addEventListener('DOMContentLoaded', () => {
  const burgers = document.querySelectorAll('.navbar-burger');

  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
});

// Theme Toggle (desktop + mobile)
document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = document.querySelectorAll(
    '#theme-toggle, #theme-toggle-mobile'
  );

  if (!themeToggles.length) return;

  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') || 'dark';

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    themeToggles.forEach(toggle => {
      toggle.innerHTML =
        theme === 'dark'
          ? '<span class="icon"><i class="fa-solid fa-moon has-text-link"></i></span>'
          : '<span class="icon"><i class="fa-solid fa-sun has-text-warning"></i></span>';
    });
  };

  // Initial sync
  setTheme(localStorage.getItem('theme') || getTheme());

  // Click handlers
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });
});
