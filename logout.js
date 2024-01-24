const logout = document.getElementById('logout');

logout.addEventListener('click', function (event) {
  event.preventDefault(); // Prevents the default behavior of the button
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  window.location.href = `http://localhost:${window.location.port}/index.html`;
});
