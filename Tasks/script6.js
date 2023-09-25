document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'your_username' && password === 'your_password') {
            alert('Login successful!'); // Replace with actual login logic
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
