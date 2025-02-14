const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const videoContainer = document.getElementById("videoContainer");

yesButton.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.querySelector("h1").classList.add("hidden");
});

noButton.addEventListener("mouseover", () => {
  moveButtonRandomly();
});

noButton.addEventListener("click", () => {
  moveButtonRandomly();
});

function moveButtonRandomly() {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate maximum X and Y positions to keep the button within the viewport
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  // Generate random X and Y positions within the viewport
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Move the button to the new position
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}
