document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector('.login-link a');
    const signUpLink = document.querySelector('.signup-link a');
    const signUpModal = new bootstrap.Modal(document.getElementById('SignUpModal'));
    const loginModal = new bootstrap.Modal(document.getElementById('ModalForm'));

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        signUpModal.hide(); // Close the sign-up modal
        loginModal.show(); // Open the login modal
    });

    signUpLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginModal.hide(); // Close the login modal
        signUpModal.show(); // Open the sign-up modal
    });
});


function updateLoginFormAction() {
    var loginForm = document.getElementById("loginForm");
    var currentPath = window.location.pathname;
    var loginAction = currentPath === "/" ? "/login" : currentPath + "/login";
    loginForm.action = loginAction;
}

document.addEventListener("DOMContentLoaded", updateLoginFormAction);

function updateSignupFormAction() {
    var signupForm = document.getElementById("signupForm");
    var currentPath = window.location.pathname;
    var signupAction = currentPath === "/" ? "/signup" : currentPath + "/signup";
    signupForm.action = signupAction;
}

document.addEventListener("DOMContentLoaded", updateSignupFormAction);


function updateLogoutLinkHref() {
    var logoutLink = document.getElementById("logoutLink").querySelector("a");
    var currentPath = window.location.pathname;
    var logoutHref = currentPath === "/" ? "/logout" : currentPath + "/logout";
    logoutLink.href = logoutHref;
}

document.addEventListener("DOMContentLoaded", function() {
    updateLogoutLinkHref();
});

document.getElementById("logoutLink").addEventListener("click", function(event) {
    updateLogoutLinkHref();
});