// Modals

const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", (e) => {
  const modalToggle = e.target.closest(".portfolio-link");
  console.log(modalToggle);
  // if clicking anywhere else, do nothing
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  //   only select close button that is inside of the selected modal
  const closeButton = modal.querySelector(".modal-close");

  modal.classList.add("is-open");

  closeButton.addEventListener("click", (_) => {
    modal.classList.remove("is-open");
  });
});

// const modal = document.querySelector("#myModal");
// const btn = document.getElementById("myBtn");
// const span = document.getElementsByClassName("close")[0];

// // open the modal

// btn.onclick = handleOpenClick = () => {
//   modal.classList.add = "showModal";
//   modal.style.display = "block";
// };

// // close the modal
// span.onclick = handleCloseClick = () => {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = handleExitClick = (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };
