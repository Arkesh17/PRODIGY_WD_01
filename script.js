// Change navbar background color on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Three-dots dropdown toggle
const dotsMenu = document.getElementById('dots-menu');
dotsMenu.addEventListener('click', () => {
  const dropdownContent = dotsMenu.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  dotsMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dotsMenu.contains(e.target)) {
      dropdownContent.style.display = 'none';
      dotsMenu.classList.remove('active');
  }
});