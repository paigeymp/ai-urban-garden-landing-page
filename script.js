// script.js
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementsByName("email")[0].value;
    // Here you can add code to send the email address to your server or handle it as needed
    alert("Thank you for signing up with email: " + email);
  });
