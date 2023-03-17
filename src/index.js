// Components
import homepage from "./components/homepage";
import menu from "./components/menu";
import contactUs from "./components/contactUs";
import about from "./components/about";
import "../src/img//burger-menu.svg";
// style
import "./styles/style.css";
const toggleLinks = () => {
  const links = document.querySelector(".links");
  links.classList.toggle("show");
};

const content = document.querySelector(".content");
content.appendChild(homepage());
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.textContent.toLowerCase();
    content.innerHTML = "";
    if (tab === "home") {
      content.appendChild(homepage());
    } else if (tab === "menu") {
      content.appendChild(menu());
    } else if (tab === "contact us") {
      content.appendChild(contactUs());
    } else if (tab === "about") {
      content.appendChild(about());
    }
  });
});

const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", toggleLinks);
