// - - - - - Navbar - - - - -
var navbar = document.getElementById("nav-content");
var logo = document.getElementById("logonav");
var burgernav = document.getElementById("burger-nav-img");
burgernav.addEventListener("click", function () {
  navbar.classList.toggle("desactive");
  logonav.classList.toggle("desactive");
});

// - - - - - Présentation - - - - -
// Front end
var preshtml = document.getElementById("pres-html");
var presfe = document.getElementById("pres-fe");
preshtml.addEventListener("mouseover", function () {
  if (presfe.style.maxHeight) {
    presfe.style.maxHeight = null;
  } else {
    presfe.style.maxHeight = presfe.scrollHeight + "px";
  }
});
preshtml.addEventListener("mouseout", function () {
  if (presfe.style.maxHeight) {
    presfe.style.maxHeight = null;
  } else {
    presfe.style.maxHeight = presfe.scrollHeight + "px";
  }
});
// Back end
var presdb = document.getElementById("pres-db");
var presbe = document.getElementById("pres-be");
presdb.addEventListener("mouseover", function () {
  if (presbe.style.maxHeight) {
    presbe.style.maxHeight = null;
  } else {
    presbe.style.maxHeight = presbe.scrollHeight + "px";
  }
});
presdb.addEventListener("mouseout", function () {
  if (presbe.style.maxHeight) {
    presbe.style.maxHeight = null;
  } else {
    presbe.style.maxHeight = presbe.scrollHeight + "px";
  }
});
// Mobile
var presmob = document.getElementById("pres-mob");
var presmo = document.getElementById("pres-mo");
presmob.addEventListener("mouseover", function () {
  if (presmo.style.maxHeight) {
    presmo.style.maxHeight = null;
  } else {
    presmo.style.maxHeight = presmo.scrollHeight + "px";
  }
});
presmob.addEventListener("mouseout", function () {
  if (presmo.style.maxHeight) {
    presmo.style.maxHeight = null;
  } else {
    presmo.style.maxHeight = presmo.scrollHeight + "px";
  }
});
// Web Design
var presdesign = document.getElementById("pres-design");
var presds = document.getElementById("pres-ds");
presdesign.addEventListener("mouseover", function () {
  if (presds.style.maxHeight) {
    presds.style.maxHeight = null;
  } else {
    presds.style.maxHeight = presds.scrollHeight + "px";
  }
});
presdesign.addEventListener("mouseout", function () {
  if (presds.style.maxHeight) {
    presds.style.maxHeight = null;
  } else {
    presds.style.maxHeight = presds.scrollHeight + "px";
  }
});