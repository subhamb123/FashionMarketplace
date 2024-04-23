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

function appendAlert(message, type) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  }

function validateNewItem() {
    const itemName = document.getElementById('itemName').value.trim();
    const designer = document.getElementById('designer').value.trim();
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('price').value.trim();

    if (itemName.length === 0) {
        appendAlert('Please enter a valid item name.');
        return false;
    }
    if (designer.length === 0) {
        appendAlert('Please enter a valid designer name.');
        return false;
    }
    if (category.length === 0) {
        appendAlert('Please select a category.');
        return false;
    }
    if (subcategory.length === 0) {
        appendAlert('Please select a subcategory.');
        return false;
    }
    if (size.length === 0) {
        appendAlert('Please select a size.');
        return false;
    }
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
        appendAlert('Please enter a valid price.');
        return false;
    }
    return true;
}

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

function updateSizeOptions() {
    const subcategory = document.getElementById('subcategory').value;
    const sizeSelect = document.getElementById('size');
    sizeSelect.innerHTML = '';
    if (subcategory === 'Footwear') {
        for (let i = 1; i <= 14; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i.toString();
            sizeSelect.appendChild(option);
        }
    } else {
        const sizes = ['XS', 'S', 'M', 'L', 'XL'];
        sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
    }
}