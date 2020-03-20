import loadHomePage from "./loadHomePage";
import loadMenuPage from "./loadMenuPage";
import loadContactPage from "./loadContactPage";
import css from './index.css';

loadHomePage();

const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const contactTab = document.getElementById("contactTab");

homeTab.addEventListener("click", function() {
  if (menuTab.classList.contains("active")) {
    menuTab.classList.remove("active");
  }
  if (contactTab.classList.contains("active")) {
    contactTab.classList.remove("active");
  }
  homeTab.classList.add("active");
  clearContent();
  loadHomePage();
});

menuTab.addEventListener("click", function() {
  if (homeTab.classList.contains("active")) {
    homeTab.classList.remove("active");
  }
  if (contactTab.classList.contains("active")) {
    contactTab.classList.remove("active");
  }
  menuTab.classList.add("active");
  clearContent();
  loadMenuPage();
});

contactTab.addEventListener("click", function() {
  if (menuTab.classList.contains("active")) {
    menuTab.classList.remove("active");
  }
  if (homeTab.classList.contains("active")) {
    homeTab.classList.remove("active");
  }
  contactTab.classList.add("active");
  clearContent();
  loadContactPage();
});

function clearContent() {
  let container = document.getElementById("content");
  container.innerHTML = "";
}
