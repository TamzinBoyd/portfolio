let darkModeToggle = document.getElementById("theme-toggler");
const nav = document.querySelector(".nav-container");
const navPopout = document.querySelector(".nav");
const hamburger = document.querySelectorAll(".nav-toggle-label");
const desktopMenu = document.querySelectorAll(".nav__links");

const main = document.querySelector(".main");
const text = document.querySelectorAll(".text-dark-mode");
const subHeading = document.querySelectorAll(".subHeading");
const projectMain = document.querySelector(".projects");
const modal = document.querySelector(".portfolio-modal");

const experienceMain = document.querySelector(".experience");
const contactMain = document.querySelector(".contact-container");
const contactIcon = document.querySelectorAll(".contact-icon");
const boldText = document.querySelectorAll(".bold");
const toggleBtn = document.querySelector("#theme-toggler");

const handleModeClick = () => {
  darkModeToggle.classList.toggle("fa-sun");

  if (darkModeToggle.classList.contains("fa-sun")) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
};
darkModeToggle.addEventListener("click", handleModeClick);

const changeThemeToDark = () => {
  darkModeToggle.classList.add("dark");
  nav.classList.add("dark");
  navPopout.classList.add("dark");
  main.classList.add("dark");
  projectMain.classList.add("dark");
  experienceMain.classList.add("dark");
  contactMain.classList.add("dark");
  toggleBtn.classList.add("dark");
  modal.classList.add("dark");

  for (let i = 0; i < subHeading.length; i++) {
    subHeading[i].classList.add("dark");
  }

  for (let i = 0; i < hamburger.length; i++) {
    hamburger[i].classList.add("dark");
  }
  for (let i = 0; i < desktopMenu.length; i++) {
    desktopMenu[i].classList.add("dark");
  }

  for (let i = 0; i < text.length; i++) {
    text[i].classList.add("dark");
  }
  for (let i = 0; i < contactIcon.length; i++) {
    contactIcon[i].classList.add("dark");
  }
  for (let i = 0; i < boldText.length; i++) {
    boldText[i].classList.add("dark");
  }
};

const changeThemeToLight = () => {
  darkModeToggle.classList.remove("dark");
  nav.classList.remove("dark");
  navPopout.classList.remove("dark");
  main.classList.remove("dark");

  for (let i = 0; i < subHeading.length; i++) {
    subHeading[i].classList.remove("dark");
  }
  projectMain.classList.remove("dark");
  experienceMain.classList.remove("dark");
  contactMain.classList.remove("dark");
  toggleBtn.classList.remove("dark");

  for (let i = 0; i < hamburger.length; i++) {
    hamburger[i].classList.remove("dark");
  }

  for (let i = 0; i < desktopMenu.length; i++) {
    desktopMenu[i].classList.remove("dark");
  }
  for (let i = 0; i < text.length; i++) {
    text[i].classList.remove("dark");
  }
  for (let i = 0; i < contactIcon.length; i++) {
    contactIcon[i].classList.remove("dark");
  }
  for (let i = 0; i < boldText.length; i++) {
    boldText[i].classList.remove("dark");
  }
};
