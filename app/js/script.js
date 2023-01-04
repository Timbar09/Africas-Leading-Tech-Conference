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

// SPEAKER SECTION

const speakers = [
  {
    name: 'Layla Isoke',
    photo: '../../images/Layla-Isoke.jpg',
    title: 'Head IT Technitian at the Kenyan University of technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
];
