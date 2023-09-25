const showDateButton = document.getElementById("showDateButton");
const showTimeButton = document.getElementById("showTimeButton");
const resultElement = document.getElementById("result");

showDateButton.addEventListener("click", () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    resultElement.textContent = formattedDate;
});

showTimeButton.addEventListener("click", () => {
    const currentTime = new Date();
    resultElement.textContent = currentTime.toString();
});
