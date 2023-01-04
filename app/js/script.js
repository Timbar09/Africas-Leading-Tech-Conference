// MOBILE MENU

const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hamburgerBtn = document.querySelector('#btnHumburger');

const closeMenu = () => {
  body.classList.remove('noscroll');
  header.classList.remove('open');
  overlay.classList.remove('fade-in');
  header.classList.add('close');
  overlay.classList.add('fade-out');
};

const openMenu = () => {
  body.classList.add('noscroll');
  header.classList.add('open');
  overlay.classList.add('fade-in');
  header.classList.remove('close');
  overlay.classList.remove('fade-out');
};

hamburgerBtn.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

//When clicking an option on the mobile menu
const menuOptions = document.querySelectorAll('.header__link');

menuOptions.forEach((option) =>
  option.addEventListener('click', function () {
    closeMenu();
  })
);
