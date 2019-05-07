// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

};







//////Hamburger Button/////////////
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "100%";
  document.getElementById("side-menu").style.display = "block";
  //document.getElementById("side-menu").style.transition = "width 1.5s ease-in-out";

  

}
function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.getElementById("side-menu").style.display = "none";

}

function openSlideMenuSocial() {
  document.getElementById("side-menu-social").style.width = "100%";
  document.getElementById("side-menu-social").style.display = "block";
  //document.getElementById("side-menu-social").style.transition = "width 1.5s ease-in-out";


}
function closeSlideMenuSocial() {
  document.getElementById("side-menu-social").style.width = "0px";
  document.getElementById("side-menu-social").style.display = "none";
}


