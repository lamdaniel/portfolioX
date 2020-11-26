//Responsive Navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeNavigation() {
  var x = document.getElementById("myTopnav");
    x.className = "topnav";
}