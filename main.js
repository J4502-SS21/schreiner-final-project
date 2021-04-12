"use strict";

var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById("menu_trigger");

menuTrigger.onclick = function() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  console.log("The menu has been toggled!")
}
