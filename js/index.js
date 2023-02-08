/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
// Mobile Nav Toggle
const mobileBtn = document.querySelector('.mobile-toggle-btn');
const headerNav = document.querySelector('.header');
const navLink = document.querySelectorAll('.link-nav');

mobileBtn.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove('active');
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const gridItems = document.getElementById('grid');

  // Create a new object
  const mainCardDetails = {
    title: 'Hotel Booking App',
    desc: 'Hotel Booking App is a Hotel Booking (SPA) where the users can register themselves, login and reserve a set of different Hotels. It is built and connected by using two different repos, including the server side( Our Backend) with Ruby on Rails, and the client side(Our Front-end) with React/Redux.',
    languages: ['Ruby On Rails', 'PostgreSql', 'React JS'],
    live: 'https://inspiring-kashata-9d9dfc.netlify.app/',
    source: 'https://github.com/Tadessejemal1/hotel-booking-frontend.git',
    img: './images/Capture2.JPG',
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join('');

  // Add dynamic data in main card
  let mainCardData = '';
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 1,
      title: 'Conference page',
      desc: "This is my final capstone project for Microverse's first module. In this project, I covered topics like setting up HTML, CSS and JavaScript files, using GitHub Actions, using Grid, and following the GitHub flow. I've deployed my portfolio application to GitHub Pages, completing this project.",
      languages: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://tadessejemal1.github.io/FIRST-CAPSTONE-PROJECT/',
      source: 'https://github.com/Tadessejemal1/FIRST-CAPSTONE-PROJECT.git',
      img: './images/Capture1.JPG',
    },
    {
      id: 2,
      title: 'Display Movies',
      desc: 'The JavaScript capstone project is about building our own web application based on an external API. we were select an API that provides data about a topic that you like and then build the webapp around it. The webapp have 2 user interfaces A home page showing a list of items that you can like. A popup window with more data about an item that you can use to comment on it or reserve it for a period of time.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://kumilachew-g.github.io/JavaScript-Capstone/dist/',
      source: 'https://github.com/Tadessejemal1/JavaScript-Capstone.git',
      img: './images/Capture5.JPG',
    },
    {
      id: 3,
      title: 'Math Magicians',
      desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
      languages: ['React JS', 'React Router Dom'],
      live: 'https://euphonious-cactus-a77132.netlify.app/',
      source: 'https://github.com/Tadessejemal1/math-magicians.git',
      img: './images/Capture7.JPG',
    },
    {
      id: 4,
      title: 'Leader board Web',
      desc: 'In this website you will add scores and also see your scores and I am using a api for fetch the data from api and also add data to the api.',
      languages: ['HTML', 'CSS', 'JS'],
      live: 'https://tadessejemal1.github.io/Leaderboard-web/dist/',
      source: 'https://github.com/Tadessejemal1/Leaderboard-web.git',
      img: './images/Capture3.JPG',
    },
    {
      id: 5,
      title: 'Space Travel Hub',
      desc: 'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Using real live data from the SpaceX API.',
      languages: ['React.Js', 'Redux', 'JS'],
      live: 'https://lokurasrlz.github.io/Space-Travelers/',
      source: 'https://github.com/Tadessejemal1/Space-Travelers-Hub.git',
      img: './images/Capture6.JPG',
    },
    {
      id: 6,
      title: 'Budget App',
      desc: 'This project was created through the Microverse software development education course to amplify understanding of Ruby and Ruby on Rails by building a mobile web application where users can log in and monitor their expenses. It also provides an option to classify the outgoings into various classes',
      languages: ['Ruby on Rails', 'PostgresSQL'],
      live: 'https://budget-app-project.onrender.com/',
      source: 'https://github.com/Tadessejemal1/Budget-App.git',
      img: './images/Capture8.JPG',
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = '';
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join('');
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  // eslint-disable-next-line no-undef
  mainModal = () => {
    let modalDetails = '';
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join('')}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./images/share.png'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./images/github.png'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = 'block';

    // Close modal
    const closeModal = document.getElementsByClassName('modal-close-icon')[0];
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = '';
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join('')}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${
  data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./images/share.png'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${
  data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./images/github.png'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = 'block';

    // Close modal
    const closeModal = document.getElementsByClassName('modal-close-icon')[0];
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };

  new Typed('.auto-change', {
    strings: [
      'Web Developer',
      'Rails Developer',
      'Full Stack Developer',
      'Front-end Developer',
      'React Native Developer',
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const alert = document.getElementById('alert-danger');

const submitForm = (e) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const str = email.value;
  if (str === str.toLowerCase()) {
    if (regex.test(str)) {
      alert.classList.remove('show-alert');
    } else {
      e.preventDefault();
      alert.classList.add('show-alert');
      alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          You enter invalid email address!
    `;
    }
  } else {
    e.preventDefault();
    alert.classList.add('show-alert');
    alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          Please enter lowercase letters.
    `;
  }
  setTimeout(() => {
    alert.classList.remove('show-alert');
  }, 2500);
};

submit.addEventListener('click', submitForm);

// Store data in localStorage
const fullName = document.getElementById('fullName');
const message = document.getElementById('message');
const reset = document.getElementById('reset');

changeHandler = () => {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('user', JSON.stringify(field));
};

if (localStorage.getItem('user') === null) {
  email.value = '';
  fullName.value = '';
  message.value = '';
} else {
  const user = JSON.parse(localStorage.getItem('user'));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}

const resetFrom = (e) => {
  e.preventDefault();
  email.value = '';
  fullName.value = '';
  message.value = '';
  localStorage.removeItem('user');
};

reset.addEventListener('click', resetFrom);

// Select all the sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to the window that listens for a scroll event
document.addEventListener('scroll', () => {
  // Get the current position of the window
  const currentPosition = window.scrollY + 80;
  // Loop through all the sections
  sections.forEach((section) => {
    // Check if the current position is within the section
    if (
      section.offsetTop <= currentPosition
      && section.offsetTop + section.offsetHeight > currentPosition
    ) {
      // Loop through all the nav links
      navLinks.forEach((link) => {
        // Remove the active class from all the nav links
        link.classList.remove('nav-active');
        // Check if the section id is the same as the nav link href
        if (
          section.getAttribute('id') === link.getAttribute('href').substring(1)
        ) {
          // Add the active class to the nav link
          link.classList.add('nav-active');
        }
      });
    }
  });
});