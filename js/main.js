document.querySelectorAll('#faq .card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    const content = card.querySelector('.faq-content');
    const icon = card.querySelector('.faq-icon');

    content.classList.toggle('is-hidden');
    icon.classList.toggle('is-rotated');
  });
});
