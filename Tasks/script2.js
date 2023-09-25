function alphabetizeString() {
    const inputString = document.getElementById("inputString").value;
    const alphabetizedString = alphabetize(inputString);
    document.getElementById("outputString").textContent = alphabetizedString;
}

function alphabetize(str) {
    return str.split('').sort().join('');
}

document.getElementById("alphabetizeButton").addEventListener("click", alphabetizeString);
