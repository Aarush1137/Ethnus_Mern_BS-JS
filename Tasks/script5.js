document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const websiteError = document.getElementById("website-error");
        const messageError = document.getElementById("message-error");

        nameError.textContent = "";
        emailError.textContent = "";
        websiteError.textContent = "";
        messageError.textContent = "";

        if (!contactForm.name.value) {
            nameError.textContent = "Name is required!";
            event.preventDefault();
        }

        if (!contactForm.email.value) {
            emailError.textContent = "Email is required!";
            event.preventDefault();
        } else if (!isValidEmail(contactForm.email.value)) {
            emailError.textContent = "Please enter a valid email address!";
            event.preventDefault();
        }

        if (!contactForm.website.value) {
            websiteError.textContent = "Website is required!";
            event.preventDefault();
        }

        if (!contactForm.message.value) {
            messageError.textContent = "Message is required!";
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
