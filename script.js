const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const videoContainer = document.getElementById("videoContainer");
const videoPlayer = document.getElementById("videoPlayer");

yesButton.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.querySelector("h1").classList.add("hidden");

  // Start video playback
  videoPlayer.play();
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

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const currentX = parseInt(noButton.style.left) || 0;
  const currentY = parseInt(noButton.style.top) || 0;

  const movementRange = 50;
  let newX = currentX + (Math.random() * movementRange * 2 - movementRange);
  let newY = currentY + (Math.random() * movementRange * 2 - movementRange);

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noButton.style.position = "absolute";
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}
