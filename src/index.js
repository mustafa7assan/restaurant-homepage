// Components
import homepage from "./components/homepage";
import menu from "./components/menu";
import contactUs from "./components/contactUs";
import about from "./components/about";
// style
import "./styles/style.css";

const content = document.querySelector(".content");
content.appendChild(homepage());
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.textContent.toLowerCase();
    console.log(tab);
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
