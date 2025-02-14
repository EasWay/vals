const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const videoContainer = document.getElementById("videoContainer");

yesButton.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.querySelector("h1").classList.add("hidden");
});

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

noButton.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
