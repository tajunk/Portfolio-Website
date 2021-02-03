// Set Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const logo = document.getElementById('logoImg');
const menuBars = document.getElementById('menuBars');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // Fixed nav
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
    navbar.classList.remove('reg-nav');
    menuBars.classList.remove('white');
    logo.src = 'logo.png';
  } else {
    navbar.classList.remove('fixed-nav');
    navbar.classList.add('reg-nav');
    menuBars.classList.add('white');
    logo.src = 'logowhite.png';
  }
  // Back to top button
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// Smooth Scrolling to sections
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 92) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // Close toggle NAV when scrolling on mobile
    linksContainer.style.height = 0;
  });
});

// Project Section

const btns = document.querySelectorAll('.tab-btn');
const project = document.querySelector('.project');
const articles = document.querySelectorAll('.content');

project.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // Hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

const projectData = [
  {
    id: 1,
    projTitle: 'Q & A Web App',
    projDescription:
      'This project is a web app developed in React. The goal with this project was to create a ' +
      'mini forum like question and answer environment where multiple users could be logging in both posting ' +
      'and answering questions. Security functionality was implemented using Auth0, accounts for the web app are created through the Auth0 login service ' +
      'and are required to access the additional functionality of the web app. Before logging in a user can only view answered / unanswered ' +
      'questions, answers and use the search functionality, but when they are logged in they can now post a question or answer a question ' +
      'already posted. Created using the ASP.NET Core framework for the backend, coded in C#, to interact with a database in SQL Server. ' +
      'The frontend was built with React, using Redux for state management, and coded with Typescript.',
    projGitHub: 'https://github.com/tajunk/React-C.NET-Project',
    projVideo: 'qareact-project.mp4',
    projSkill1: 'React',
    projSkill2: 'Typescript',
    projSkill3: 'C#',
    projSkill4: '.NET Core',
    projSkill5: 'SQL Server',
    projSkill6: 'Auth0',
  },
  {
    id: 2,
    projTitle: 'Fit Tracker',
    projDescription:
      'Created in Android Studio with the Java programming language. SQLite was used to handle ' +
      'creating profiles as well as saving laps to a unique session created by the user all saved locally. The idea with this ' +
      'project was to expand on a simple timer app and give it more functionality with profiles, automatic laps, calorie burning calculations, ' +
      'and session tracking.',
    projGitHub: 'https://github.com/tajunk/Fitness-App--Android-',
    projVideo: 'android-project.mp4',
    projSkill1: 'Java',
    projSkill2: 'SQLite',
    projSkill3: 'Android Studio',
  },
  {
    id: 3,
    projTitle: 'Infinite Jump',
    projDescription:
      'A simple game that runs in a web browser developed in Javascript using Phaser3 which is a HTML5 framework that allows WebGL rendering in browsers. ' +
      'The goal with this project was to try something new while expanding on my Javascript knowledge. Users control the rabbit to collect as many carrots as ' +
      'possible, going upwards with platforms being generated off screen infinitely, until they inevitably fall off screen in which they will be presented with ' +
      'a "Game Over" screen, their score total and a prompt to play again.' +
      '   Check it out at https://infinite-jumping-game.netlify.app/ ',
    projGitHub: 'https://github.com/tajunk/Jump-Game--Phaser3-Javascript-',
    projVideo: 'jsgame-project.mp4',
    projSkill1: 'Javascript',
    projSkill2: 'HTML5',
    projSkill3: 'Phaser3',
  },
];

const video = document.getElementById('proj-Video');
const title = document.getElementById('proj-Title');
const desc = document.getElementById('proj-Description');
const gitHub = document.getElementById('proj-GitHub');
const skill1 = document.getElementById('proj-Skill1');
const skill2 = document.getElementById('proj-Skill2');
const skill3 = document.getElementById('proj-Skill3');
const skill4 = document.getElementById('proj-Skill4');
const skill5 = document.getElementById('proj-Skill5');
const skill6 = document.getElementById('proj-Skill6');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showProject(currentItem);
});

//Show project based on current item
function showProject(project) {
  const item = projectData[project];
  video.src = item.projVideo;
  title.textContent = item.projTitle;
  desc.textContent = item.projDescription;
  gitHub.href = item.projGitHub;
  skill1.textContent = item.projSkill1;
  skill2.textContent = item.projSkill2;
  skill3.textContent = item.projSkill3;
  skill4.textContent = item.projSkill4;
  skill5.textContent = item.projSkill5;
  skill6.textContent = item.projSkill6;
}

// Show next project
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > projectData.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
});
// Show previous project
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = projectData.length - 1;
  }
  showProject(currentItem);
});
