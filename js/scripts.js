document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  const input = document.getElementById('project-filter');
  const cards = document.querySelectorAll('.project-card');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    cards.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      const text = card.innerText.toLowerCase();
      const matches = tags.includes(query) || text.includes(query);
      card.style.display = matches ? 'block' : 'none';
    });
  });
});
