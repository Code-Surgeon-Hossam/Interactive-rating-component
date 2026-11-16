const form = document.querySelector("form");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRating = document.getElementById("selected-rating");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  selectedRating.textContent = rating;
  ratingState.hidden = true;
  thankYouState.hidden = false;
});
