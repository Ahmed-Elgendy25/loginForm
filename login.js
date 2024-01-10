let allUsers = [];

let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let loginBtn = document.getElementById('login');

if (localStorage.getItem('allUsers') != null) {
  allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

function verifyLogin() {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() === emailInput.value.toLowerCase() &&
      allUsers[i].password.toLowerCase() === passwordInput.value.toLowerCase()
    ) {
      // Store user information in localStorage
      localStorage.setItem('firstName', JSON.stringify(allUsers[i].name));
      localStorage.setItem('lastName', JSON.stringify(allUsers[i].lastName));

      return true;
    }
  }
  return false;
}

loginBtn.addEventListener('click', function () {
  if (verifyLogin()) {
    window.location.href = `http://localhost:${window.location.port}/home.html`;
  } else {
    alert('Invalid login credentials. Please try again.');
  }
});

function displayWelcomeMsg() {
  let h1 = document.getElementById('h1');
  let firstName = JSON.parse(
    localStorage.getItem('firstName').toLocaleUpperCase()
  );
  let lastName = JSON.parse(
    localStorage.getItem('lastName').toLocaleUpperCase()
  );

  h1.innerText = `Welcome ${firstName} ${lastName}`;
}
