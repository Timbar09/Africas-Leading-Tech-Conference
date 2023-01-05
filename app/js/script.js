// Media Query
const mobileViewDown = window.matchMedia('(max-width: 39.9375em');

const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('#btnHumburger');

hamburgerBtn.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// When clicking an option on the mobile menu
const menuOptions = document.querySelectorAll('.header__menu-link');

menuOptions.forEach((option) =>
  option.addEventListener('click', () => {
    closeMenu();
  })
);

// SPEAKER SECTION

const speakerGrid = document.querySelector('.speaker__grid');

// Load speaker onto the page
if (mobileViewDown.matches) {
  window.addEventListener('load', () => {
    loadFirstTwoSpeakers();

    moreBtn.addEventListener('click', () => {
      expandSpeakers();
    });

    lessBtn.addEventListener('click', () => {
      minimizeSpeakers();
    });
  });
} else {
  window.addEventListener('load', () => {
    loadAllSpeakers();
  });
}
