document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push(`${username} is too short for a username`);
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push(`${email} is not a valid email address`);
        }

        if (password.length < 8) {
            isValid = false;
            messages.push(`Password must be at least 8 characters long`);
        }

        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});