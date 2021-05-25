const toggleBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('.main-menu');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});


