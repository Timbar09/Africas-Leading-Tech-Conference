// MOBILE MENU
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hamburgerBtn = document.querySelector('#btnHumburger');
// Media Query
const mobileViewDown = window.matchMedia('(max-width: 39.9375em');

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

hamburgerBtn.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// When clicking an option on the mobile menu
const menuOptions = document.querySelectorAll('.header__menu-link');

menuOptions.forEach((option) => option.addEventListener('click', () => {
  closeMenu();
}));

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
    bio: 'Apara Dada is a Professor in the Department of Computer Science at Botswana University of Information, Science and Technology, where he has been since 2004.From 2012 to 2014 he served as Chief Scientist of Guavus, Inc. .',
  },
  {
    name: 'Safiya Atsukpi',
    photo: 'images/Safiya-Atsukpi.jpg',
    title: 'Computer Research Scientist',
    bio: 'Safiya Atsukpi is a computer science expert. He used to work as a computer science and mathematics professor at Austin, specifically in the University of Texas. Not much is known of Robert Boyer’s private life except his accomplishments in his respective fields.',
  },
  {
    name: 'Lorato Montsho',
    photo: 'images/Lorato-Montsho.jpg',
    title: 'Freelace Fullstack Web Developer',
    bio: 'Accomplished software developer with 10 years of experience in development of applications including design creation, coding, debugging, testing, and maintenance. Expert in devising innovative and tailored solutions to a variety of industries.',
  },
  {
    name: 'Andile Laila',
    photo: 'images/Andile-Laila.jpg',
    title: 'Information Security Analyst',
    bio: 'Andile Laila is a skilled Information Security Analyst with expertise in risk management, unauthorized access, viruses, and a wide range of vulnerabilities and threats. Well-versed in direct and remote analysis with strong critical thinking, communication.',
  },
  {
    name: 'Mpho Morena',
    photo: 'images/Mpho-Morena.jpg',
    title: 'Data Scientist',
    bio: 'Mpho Morena is a Data Scientist with a strong background in software engineering; and used to handling a variety of data pipelines and databases, included unstructured ones. He has prototyped various products from different reputable companies.',
  },
];

const speakerGrid = document.querySelector('.speaker__grid');

// Functions for creating a speaker card

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

// Load two speakers on mobile view, but veiw all six on desktop view
if (mobileViewDown.matches) {
  window.addEventListener('load', () => {
    const firstTwo = speakers.slice(0, 2);

    // Load the first two speakers
    firstTwo.forEach((firstTwoSpeaker) => {
      speakerGrid.appendChild(speakerCard(firstTwoSpeaker));
    });

    // Activate the expand button and deactivate the minimise button
    const moreBtn = document.querySelector('.speaker__expand');
    const lessBtn = document.querySelector('.speaker__minimize');

    moreBtn.style.visibility = 'visible';
    lessBtn.style.visibility = 'hidden';

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
    const minimize = () => {
      const speakerGrid = document.querySelector('.speaker__grid');
      const loopLength = document.querySelectorAll('.speaker__card').length - 2;

      for (let i = 0; i < loopLength; i += 1) {
        speakerGrid.removeChild(document.querySelector('.speaker__card:last-child'));
      }

      moreBtn.style.visibility = 'visible';
      lessBtn.style.visibility = 'hidden';
    };

    moreBtn.addEventListener('click', () => {
      expandSpeakers();
    });

    lessBtn.addEventListener('click', () => {
      minimize();
    });
  });
} else {
  window.addEventListener('load', () => {
    speakers.forEach((speaker) => {
      speakerGrid.appendChild(speakerCard(speaker));
    });
  });
}
