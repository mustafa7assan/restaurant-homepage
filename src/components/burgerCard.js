import img1 from "../img/burger-1.jpg";
import img2 from "../img/burger-2.jpg";
import img3 from "../img/burger-3.jpg";
import img4 from "../img/burger-4.jpg";
import img5 from "../img/burger-5.jpg";
import img6 from "../img/burger-6.jpg";
import img7 from "../img/burger-7.jpg";
import img8 from "../img/burger-8.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const burgerCard = (burger, index) => {
  const div = document.createElement("div");
  div.classList.add("burger-card");
  const html = `
  <div class="burger-image">
    <img src="${images[index]}" alt="" />
  </div>
  <div class="burger-card-body">
    <h3>${burger.name}</h3>
    <p>
    ${burger.description.slice(0, 70)} ...
    </p>
    <p>30$ USD</p>
    <button class="btn">Order Now</button>
  </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  return div;
};

export default burgerCard;
