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