let firstNameInput = document.getElementById('fn');
let lastNameInput = document.getElementById('ln');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('password2');
let signIn = document.getElementById('button2');
let allUsers = [];

if (localStorage.getItem('allUsers') != null) {
  allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

function signUp() {
  let user = {
    name: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (validate() && isNotExist()) {
    allUsers.push(user);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    firstNameInput.value = '';
    lastNameInput.value = '';
    passwordInput.value = '';
    emailInput.value = '';

    confirmPasswordInput = '';
  }

  console.log(allUsers);
}

function validate() {
  if (
    validateName(firstNameInput.value) &&
    validateName(lastNameInput.value) &&
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value) &&
    validatePassword(confirmPasswordInput.value)
  ) {
    return true;
  } else {
    return false;
  }
}

function isNotExist() {
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
      console.log('This user is already exist');
      return false;
    }
  }
  return true;
}

function validatePassword(password) {
  // Regular expression to match a password between 5 to 15 characters
  const passPattern = /^.{5,15}$/;

  // Check if the password is not empty and matches the regular expression
  if (password && passPattern.test(password)) {
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.add('is-valid');
    passwordInput.classList.replace('d-block', 'd-none');
    return true; // Valid password
  } else {
    console.log('invalid password');
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
    passwordInput.classList.replace('d-none', 'd-block');
    return false; // Invalid password
  }
}

function validateName(name) {
  // Regular expression to match only alphabetical characters
  const regex = /^[a-zA-Z]+$/;

  // Check if the name is not empty and matches the regular expression
  if (name && regex.test(name)) {
    firstNameInput.classList.remove('is-invalid');
    firstNameInput.classList.add('is-valid');
    firstNameInput.classList.replace('d-block', 'd-none');
    return true; // Valid name
  } else {
    console.log('invalid name');
    firstNameInput.classList.remove('is-valid');
    firstNameInput.classList.add('is-invalid');
    firstNameInput.classList.replace('d-none', 'd-block');
    return false; // Invalid name
  }
}

function validateEmail(email) {
  // Regular expression to validate email addresses
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is not empty and matches the regular expression
  if (email && regex.test(email)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    emailInput.classList.replace('d-block', 'd-none');
    return true; // Valid email
  } else {
    console.log('invalid email');
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailInput.classList.replace('d-none', 'd-block');
    return false; // Invalid email
  }
}

signIn.addEventListener('click', function () {
  window.location.href = `http://localhost:${window.location.port}/login.html`;
});
