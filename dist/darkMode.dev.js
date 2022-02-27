"use strict";

var darkModeToggle = document.getElementById("theme-toggler");
var nav = document.querySelector(".nav-container");
var navPopout = document.querySelector(".nav");
var hamburger = document.querySelectorAll(".nav-toggle-label");
var desktopMenu = document.querySelectorAll(".nav__links");
var main = document.querySelector(".main");
var text = document.querySelectorAll(".text-dark-mode");
var subHeading = document.querySelectorAll(".subHeading");
var projectMain = document.querySelector(".projects");
var modal = document.querySelector(".portfolio-modal");
var experienceMain = document.querySelector(".experience");
var contactMain = document.querySelector(".contact");
var contactIcon = document.querySelectorAll(".contact-icon");
var boldText = document.querySelectorAll(".bold");
var toggleBtn = document.querySelector("#theme-toggler");

var handleModeClick = function handleModeClick() {
  darkModeToggle.classList.toggle("fa-sun");

  if (darkModeToggle.classList.contains("fa-sun")) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
};

darkModeToggle.addEventListener("click", handleModeClick);

var changeThemeToDark = function changeThemeToDark() {
  darkModeToggle.classList.add("dark");
  nav.classList.add("dark");
  navPopout.classList.add("dark");
  main.classList.add("dark");
  projectMain.classList.add("dark");
  experienceMain.classList.add("dark");
  contactMain.classList.add("dark");
  toggleBtn.classList.add("dark");
  modal.classList.add("dark");

  for (var i = 0; i < subHeading.length; i++) {
    subHeading[i].classList.add("dark");
  }

  for (var _i = 0; _i < hamburger.length; _i++) {
    hamburger[_i].classList.add("dark");
  }

  for (var _i2 = 0; _i2 < desktopMenu.length; _i2++) {
    desktopMenu[_i2].classList.add("dark");
  }

  for (var _i3 = 0; _i3 < text.length; _i3++) {
    text[_i3].classList.add("dark");
  }

  for (var _i4 = 0; _i4 < contactIcon.length; _i4++) {
    contactIcon[_i4].classList.add("dark");
  }

  for (var _i5 = 0; _i5 < boldText.length; _i5++) {
    boldText[_i5].classList.add("dark");
  }
};

var changeThemeToLight = function changeThemeToLight() {
  darkModeToggle.classList.remove("dark");
  nav.classList.remove("dark");
  navPopout.classList.remove("dark");
  main.classList.remove("dark");

  for (var i = 0; i < subHeading.length; i++) {
    subHeading[i].classList.remove("dark");
  }

  projectMain.classList.remove("dark");
  experienceMain.classList.remove("dark");
  contactMain.classList.remove("dark");
  toggleBtn.classList.remove("dark");

  for (var _i6 = 0; _i6 < hamburger.length; _i6++) {
    hamburger[_i6].classList.remove("dark");
  }

  for (var _i7 = 0; _i7 < desktopMenu.length; _i7++) {
    desktopMenu[_i7].classList.remove("dark");
  }

  for (var _i8 = 0; _i8 < text.length; _i8++) {
    text[_i8].classList.remove("dark");
  }

  for (var _i9 = 0; _i9 < contactIcon.length; _i9++) {
    contactIcon[_i9].classList.remove("dark");
  }

  for (var _i10 = 0; _i10 < boldText.length; _i10++) {
    boldText[_i10].classList.remove("dark");
  }
};