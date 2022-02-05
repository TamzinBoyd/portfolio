"use strict";

var body = document.querySelector("body");
var hi = document.querySelector(".welcome__hi");
var welcome = document.querySelector(".welcome__info");
var toggle = document.querySelector(".mode-toggle");
var subheading = document.querySelectorAll(".subHeading");
var projects = document.querySelector(".projects__container");
var experience = document.querySelector(".experience-container");
var icons = document.querySelectorAll(".skill-icon");
var contact = document.querySelector(".contact");
var contactPara = document.querySelectorAll(".contact__para");
var contactBold = document.querySelector(".contact__intouch");
var navBar = document.querySelector(".nav-container");
toggle.addEventListener("click", function () {
  body.classList.add("dark");
  hi.classList.add("dark");
  welcome.classList.add("dark");

  for (var i = 0; i < subheading.length; i++) {
    subheading[i].classList.add("dark");
  }

  projects.classList.add("dark");
  experience.classList.add("dark");

  for (var _i = 0; _i < icons.length; _i++) {
    icons[_i].classList.add("dark");
  }

  contact.classList.add("dark");

  for (var _i2 = 0; _i2 < contactPara.length; _i2++) {
    contactPara[_i2].classList.add("dark");
  }

  contactBold.classList.add("dark");
  navBar.classList.add("dark");
});