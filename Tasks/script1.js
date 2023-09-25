function reverseNumber() {
    const inputNumber = document.getElementById("inputNumber").value;
    const reversedNumber = reverse(inputNumber);
    document.getElementById("outputNumber").textContent = reversedNumber;
}

function reverse(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

document.getElementById("reverseButton").addEventListener("click", reverseNumber);
