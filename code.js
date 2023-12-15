const video = document.getElementById("play");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const feedbackForm = document.getElementById("feedback-form");
const buttons = document.getElementById("button123")

video.addEventListener("click", () => {
  modal.style.display = "block";
  video.pause();
});

buttons.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

feedbackForm.addEventListener("click", (e) => {
  e.stopPropagation();
});

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("modal");

//   modal.style.display = "block";

//   const closeButton = document.getElementById("close-button");
//   const feedbackForm = document.getElementById("feedback-form");

  

//   closeButton.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
// });


