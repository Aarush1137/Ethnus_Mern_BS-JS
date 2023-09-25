document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous error messages
        errorMessages.innerHTML = "";

        // Get form fields
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const declaration = document.getElementById("declaration").checked;

        // Check for empty fields
        if (!firstName || !lastName || !email || !password || !confirmPassword || !declaration) {
            errorMessages.innerHTML = "Please fill in all fields.";
            return;
        }

        // Check password match
        if (password !== confirmPassword) {
            errorMessages.innerHTML = "Passwords do not match.";
            return;
        }

        // If all checks pass, you can submit the form
        registrationForm.submit();
    });
});
