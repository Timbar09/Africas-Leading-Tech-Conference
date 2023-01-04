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
    photo: 'images/Layla-Isoke.jpg',
    title: 'Head IT Technitian at the Kenyan University of technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
  {
    name: 'Apara Dada',
    photo: 'images/Apara-Dada.jpg',
    title: 'Professor at the Botswana University of Information, Science and Technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
  {
    name: 'Apara Dada',
    photo: 'images/Apara-Dada.jpg',
    title: 'Professor at the Botswana University of Information, Science and Technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
  {
    name: 'Apara Dada',
    photo: 'images/Apara-Dada.jpg',
    title: 'Professor at the Botswana University of Information, Science and Technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
  {
    name: 'Apara Dada',
    photo: 'images/Apara-Dada.jpg',
    title: 'Professor at the Botswana University of Information, Science and Technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
  {
    name: 'Apara Dada',
    photo: 'images/Apara-Dada.jpg',
    title: 'Professor at the Botswana University of Information, Science and Technology',
    bio: 'Layla Isoke is a 26-year-old head IT technician whose life is dominated by solving the murder of her half sister, Sabrina Isoke. Sabrina was shot in 2020 and the killer was never brought to justice.',
  },
];

const speakerGrid = document.querySelector('.speaker__grid');

window.addEventListener('load', () => {
  speakers.forEach((speaker) => {
    speakerGrid.appendChild(speakerCard(speaker));
  });
});

// Functions for creating a speaker card

const speakerCard = (speaker) => {
  const card = document.createElement('li');
  card.className = 'speaker__card flex flex-collumn';

  card.appendChild(speakerPhoto(speaker));
  card.appendChild(speakerText(speaker));

  return card;
};

const speakerPhoto = (speaker) => {
  // Speaker image
  const image = document.createElement('img');
  image.src = speaker.photo;
  image.alt = speaker.name + "'s photo";

  // Speaker span container
  const spanContainer = document.createElement('span');
  spanContainer.className = 'speaker__image-photo';

  // Speaker div container
  const divContainer = document.createElement('div');
  divContainer.className = 'speaker__image';

  spanContainer.appendChild(image);
  divContainer.appendChild(spanContainer);

  return divContainer;
};

const speakerText = (speaker) => {
  // Speaker Name
  const name = document.createElement('h3');
  name.className = 'section-sub-title';
  name.textContent = speaker.name;

  // Speaker title
  const title = document.createElement('p');
  title.className = 'speaker__title';
  title.textContent = speaker.title;

  // Speaker bio information
  const bio = document.createElement('p');
  bio.className = 'speaker__bio';
  bio.textContent = speaker.bio;

  // Speaker text
  const speakerText = document.createElement('div');
  speakerText.className = 'speaker__text';

  // Add speaker name, title, and bio to speakerText
  speakerText.appendChild(name);
  speakerText.appendChild(title);
  speakerText.appendChild(bio);

  return speakerText;
};
