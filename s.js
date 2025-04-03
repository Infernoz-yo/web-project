document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Validating Full Name
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }
    // Validating Email
    if (email === "") {
        alert("Please enter your email.");
        return;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validating Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
});
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}