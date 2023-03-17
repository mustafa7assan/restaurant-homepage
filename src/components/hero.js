import "../img/hero.jpg";
import menu from "./menu";
const hero = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const html = `
  <div class="hero-text">
    <h1>Indulge in the Juiciest, Most Delicious Burgers at Burger Hub - Your Ultimate Burger Destination!</h1>
    <button class="btn order-now">ORDER NOW</button>
  </div>`;
  hero.insertAdjacentHTML("afterbegin", html);
  const button = hero.querySelector(".order-now");
  button.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild(menu());
  });
  return hero;
};

export default hero;
