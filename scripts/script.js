// Navbar
var navbar = document.getElementById("nav-content");
var logo = document.getElementById("logonav");
var burgernav = document.getElementById("burger-nav-img");
burgernav.addEventListener("click", function () {
  navbar.classList.toggle("desactive");
  logonav.classList.toggle("desactive");
});
