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
