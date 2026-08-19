document.querySelectorAll('.card').forEach((card) => {
  const flip = () => {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
  };

  card.addEventListener('click', (event) => {
    if (!event.target.closest('a')) flip();
  });

  card.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('a')) {
      event.preventDefault();
      flip();
    }
  });

  card.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => event.stopPropagation());
  });
});
