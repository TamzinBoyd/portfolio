"use strict";

var portfolioContainer = document.querySelector(".portfolio-items"); // modal click event listener was interferring with clicks, so created a click event on the button, which opens a new window witht he link based on the value of the href

var gitHubLink = document.querySelectorAll(".code-link");

for (var i = 0; i < gitHubLink.length; i++) {
  gitHubLink[i].addEventListener("click", function (e) {
    console.log("hell");
    window.open(e.target.getAttribute("value"));
  });
}

portfolioContainer.addEventListener("click", function (e) {
  e.preventDefault(); // saving target of the click, and take the closest link to the click

  var modalToggle = e.target.closest(".modal-link"); // if they click on something that isn't a link then don't run the rest

  if (!modalToggle) return; // if there is a button then select the right modal (skip to parent then to sibling)

  var modal = modalToggle.parentNode.nextElementSibling; // find the button within the chosen modal, instead of document

  var closeButton = modal.querySelector(".close-modal"); // open modal

  var modalOpen = function modalOpen() {
    modal.classList.add("is-open"); // on this modal, create a style animation, use the pre-labelled modalFade from SCSS file, then specify time frame & direction

    modal.style.animation = "modalIn 500ms forwards";
  }; // hide modal on pressing close button


  var modalClose = function modalClose() {
    modal.classList.remove("is-open"); // remove event listener so it can be re-opened again

    modal.removeEventListener("animationend", modalClose);
  };

  closeButton.addEventListener("click", function () {
    modal.style.animation = "modalOut 500ms forwards"; // when the animation above ends it will fun the function

    modal.addEventListener("animationend", modalClose);
  }); // when user presses esc they can close the modal

  document.addEventListener("keydown", function (e) {
    if (e.keycode = 27) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
    }
  });
  modalOpen();
});