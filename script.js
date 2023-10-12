document.addEventListener("DOMContentLoaded", function () {
    //Get Refrences to the login button and home link
    const loginButton = document.getElementById("login-button");
    const homeLink = document.getElementById("home-link");

    //Add event listners to the login button
    loginButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default form submission
        // You would perform your authentication here, and if successful:
        // Redirect the user to the home page
        homeLink.click();
    });
});