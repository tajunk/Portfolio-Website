// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else{
        linksContainer.style.height = 0;
    }
});

// Fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    // Fixed nav
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
    // Back to top button
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }
});

// Smooth Scrolling to sections
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevent default
        e.preventDefault();
        
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position -navHeight;
        }
        if(navHeight > 92){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        // Close toggle NAV when scrolling on mobile
        linksContainer.style.height = 0;
    });
});

// Project Section

const btns = document.querySelectorAll(".tab-btn");
const project = document.querySelector(".project");
const articles = document.querySelectorAll(".content");

project.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        // Remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // Hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

const projectData = [
    {
        id: 1,
        projTitle: "Fit Tracker",
        projDescription: "Created in Android Studio with the Java programming language. SQLite was used to handle "+
        "creating profiles as well as saving laps to a unique session created by the user all saved locally. The idea here with this "+
        "app was to expand on a simple timer app and give it more functionality with profiles, automatic laps, calorie burning calculations, "+
        "and session tracking.",
        projGitHub: "https://github.com/tajunk/Fitness-App--Android-",
        projVideo: "android-project.mp4",
        projSkill1: "Java",
        projSkill2: "SQLite",
        projSkill3: "AndroidStudio",
    },
    {
        id: 2,
        projTitle: "Infinite Jumping Game",
        projDescription: "I'll write this shit later",
        projGitHub: "https://github.com/tajunk/Jump-Game--Phaser3-Javascript-",
        projVideo: "jsgame-project.mp4",
        projSkill1: "Javascript",
        projSkill2: "Phaser3",
    },
    {
        id: 3,
        projTitle: "Q&A Web App",
        projDescription: "React good. Employer like.",
        projGitHub: "https://github.com/tajunk/React-C.NET-Project",
        projVideo: "android-project.mp4",
        projSkill1: "React",
        projSkill2: "Typescript",
        projSkill3: "C#",
        projSkill4: ".NET Core",
        projSkill5: "Auth0",
    }
];

const video = document.getElementById("proj-Video");
const title = document.getElementById("proj-Title");
const desc = document.getElementById("proj-Description");
const gitHub = document.getElementById("proj-GitHub");
const skill1 = document.getElementById("proj-Skill1");
const skill2 = document.getElementById("proj-Skill2");
const skill3 = document.getElementById("proj-Skill3");
const skill4 = document.getElementById("proj-Skill4");
const skill5 = document.getElementById("proj-Skill5");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
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
};
// Show next project
nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > projectData.length - 1) {
        currentItem = 0;
    }
    showProject(currentItem);
});
// Show previous project
prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
      currentItem = projectData.length - 1;
    }
    showProject(currentItem);
  });
