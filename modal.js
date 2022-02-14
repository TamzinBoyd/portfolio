const portfolioContainer = document.querySelector(".portfolio-items");
portfolioContainer.addEventListener("click", (e) => {
  e.preventDefault();
  // saving target of the click, and take the closest link to the click
  const modalToggle = e.target.closest(".modal-link");

  // if they click on something that isn't a link then don't run the rest
  if (!modalToggle) return;

  // if there is a button then select the right modal (skip to parent then to sibling)
  const modal = modalToggle.parentNode.nextElementSibling;
  // find the button within the chosen modal, instead of document
  const closeButton = modal.querySelector(".close-modal");

  // open modal
  const modalOpen = () => {
    modal.classList.add("is-open");
    // on this modal, create a style animation, use the pre-labelled modalFade from SCSS file, then specify time frame & direction
    modal.style.animation = "modalIn 500ms forwards";
  };

  // hide modal on pressing close button
  const modalClose = () => {
    modal.classList.remove("is-open");
    // remove event listener so it can be re-opened again
    modal.removeEventListener("animationend", modalClose);
  };

  closeButton.addEventListener("click", () => {
    modal.style.animation = "modalOut 500ms forwards";
    // when the animation above ends it will fun the function
    modal.addEventListener("animationend", modalClose);
  });

  // when user presses esc they can close the modal
  document.addEventListener("keydown", (e) => {
    if ((e.keycode = 27)) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
    }
  });

  modalOpen();
});
