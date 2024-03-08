function validateEmail() {
    const email = document.getElementById("email").value;
    //console.log(email);
    const valid = email.includes("@") && email.endsWith(".com");
    if (!valid) {
      alert("invalid email!");
    }
    return valid;
  }