const train = document.getElementById("train");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
let animationStarted = false;

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);

function startAnimation() {
  if (!animationStarted) {
    train.style.transition = "left 4s linear";
    train.style.left = "100%"; // Move the train to the right
    animationStarted = true;
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

function stopAnimation() {
  if (animationStarted) {
    train.style.transition = "none";
    train.style.left = "0"; // Reset the train position
    animationStarted = false;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}
