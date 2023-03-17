import "../img/hero.jpg";
const hero = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const html = `
  <div class="hero-text">
    <h1>Indulge in the Juiciest, Most Delicious Burgers at Burger Hub - Your Ultimate Burger Destination!</h1>
    <button class="btn order-now">ORDER NOW</button>
  </div>`;
  hero.insertAdjacentHTML("afterbegin", html);
  return hero;
};

export default hero;
