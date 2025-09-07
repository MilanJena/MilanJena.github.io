// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Publication search filtering
  const searchInput = document.getElementById('pubSearch');
  const publicationList = document.getElementById('pubList');
  const items = Array.from(publicationList.querySelectorAll('li'));

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});