// MOBILE MENU

const openMenu = () => {
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  body.classList.add('noscroll');
  header.classList.add('open');
  overlay.classList.add('fade-in');
  header.classList.remove('close');
  overlay.classList.remove('fade-out');
};

const closeMenu = () => {
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  body.classList.remove('noscroll');
  header.classList.remove('open');
  overlay.classList.remove('fade-in');
  header.classList.add('close');
  overlay.classList.add('fade-out');
};

// SPEAKER SECTION FUNCTIONS

const speakerPhoto = (speaker) => {
  // Speaker image
  const image = document.createElement('img');
  image.src = speaker.photo;
  image.alt = 'speaker photo';

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

const speakerCard = (speaker) => {
  const card = document.createElement('li');
  card.className = 'speaker__card flex flex-collumn';

  card.appendChild(speakerPhoto(speaker));
  card.appendChild(speakerText(speaker));

  return card;
};

const moreBtn = document.querySelector('.speaker__expand');
const lessBtn = document.querySelector('.speaker__minimize');

// Load the first two speakers
const loadFirstTwoSpeakers = () => {
  const firstTwo = speakers.slice(0, 2);

  firstTwo.forEach((firstTwoSpeaker) => {
    speakerGrid.appendChild(speakerCard(firstTwoSpeaker));
  });

  // Activate the expand button and deactivate the minimise button
  moreBtn.style.visibility = 'visible';
  lessBtn.style.visibility = 'hidden';
};

// Eexpand the list of speakers
const expandSpeakers = () => {
  const theRest = speakers.slice(2);

  theRest.forEach((speaker) => {
    speakerGrid.appendChild(speakerCard(speaker));
  });

  moreBtn.style.visibility = 'hidden';
  lessBtn.style.visibility = 'visible';
};

// Minimize th list of speakers
const minimizeSpeakers = () => {
  const loopLength = document.querySelectorAll('.speaker__card').length - 2;

  for (let i = 0; i < loopLength; i += 1) {
    speakerGrid.removeChild(document.querySelector('.speaker__card:last-child'));
  }

  moreBtn.style.visibility = 'visible';
  lessBtn.style.visibility = 'hidden';
};

const loadAllSpeakers = () => {
  speakers.forEach((speaker) => {
    speakerGrid.appendChild(speakerCard(speaker));
  });
};
