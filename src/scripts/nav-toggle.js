// src/scripts/nav-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
      });
    } else {
      console.error('Navigation toggle elements not found');
    }
  });