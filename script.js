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

  // Get the current position of the button
  const currentX = parseInt(noButton.style.left) || 0;
  const currentY = parseInt(noButton.style.top) || 0;

  // Define a small movement range (e.g., 50px in any direction)
  const movementRange = 50;

  // Calculate new X and Y positions within the movement range
  let newX = currentX + (Math.random() * movementRange * 2 - movementRange);
  let newY = currentY + (Math.random() * movementRange * 2 - movementRange);

  // Ensure the new position stays within the viewport
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  // Move the button to the new position
  noButton.style.position = "absolute";
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}
