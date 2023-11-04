function Submit(event) {
  event.preventDefault(); 
  const FName = document.getElementById("t1").value;
  const LName = document.getElementById("t2").value;
  const Email = document.getElementById("t3").value;
  const Gender = document.getElementById("t4").value;
  const PhoneNumber = document.getElementById("t5").value;
  const Password1 = document.getElementById("t6").value;

  const data = {
    FName: FName,
    LName: LName,
    Email: Email,
    Gender: Gender,
    PhoneNumber: PhoneNumber,
    Password: Password1,
  };

  const jsonData = JSON.stringify(data);

  const req = new XMLHttpRequest();
  req.open("GET", "signup.php?key=" + encodeURIComponent(jsonData), true);
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      document.getElementById("p1").innerHTML = req.responseText;
    }
  };
}

function redirect() {
  window.location.href = 'http://localhost/project/index.html';
}

function validateForm() {
  const firstName = document.getElementById("t1").value;
  const lastName = document.getElementById("t2").value;
  const email = document.getElementById("t3").value;
  const gender = document.getElementById("t4").value;
  const phone = document.getElementById("t5").value;
  const password = document.getElementById("t6").value;

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const genderError = document.getElementById("genderError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");

  // Reset error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";

  // Perform validation
  let valid = true;

  if (firstName.match(/\d/)) {
      firstNameError.textContent = "First Name should not contain numbers.";
      valid = false;
  }

  if (lastName.match(/\d/)) {
      lastNameError.textContent = "Last Name should not contain numbers.";
      valid = false;
  }

  if (email.length > 40) {
      emailError.textContent = "Email must be less than 40 characters.";
      valid = false;
  }

  if (gender.match(/\d/)) {
      genderError.textContent = "Gender should not contain numbers.";
      valid = false;
  }

  if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      phoneError.textContent = "Phone Number must be 10 digits and contain only numbers.";
      valid = false;
  }

  if (!/(?=.*[A-Za-z0-9])(?=.*[@#]).*/.test(password)) {
      passwordError.textContent = "Password must be strong (at least 1 alphanumeric character and @ or #).";
      valid = false;
  }

  return valid;
}