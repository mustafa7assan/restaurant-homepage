import footer from "./footer";
import img from "../img/about.jpg";
const about = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  div.classList.add("about");
  const html = `
        <h2>About</h2>
        <div class="container">
          <div class="about-container">
            <div class="about-image">
              <img src="${img}" alt="" />
            </div>
            <div class="about-text">
              <p>
                Welcome to Burger Hub, your ultimate destination for delicious
                burgers!
              </p>
              <p>
                At Burger Hub, we pride ourselves on serving the juiciest, most
                mouth-watering burgers in town. Our commitment to quality
                ingredients and exceptional service is what sets us apart from
                the rest.
              </p>
              <p>
                We believe that a great burger starts with great ingredients.
                That's why we source only the freshest, highest-quality beef,
                hand-selected for its flavor and tenderness. Our buns are made
                fresh daily, and we use only the finest toppings and condiments
                to create the perfect burger.
              </p>
              <p>
                But we're more than just a burger joint. At Burger Hub, we're
                all about creating an experience for our customers. Our friendly
                staff is always ready to welcome you with a smile and help you
                choose from our extensive menu of burgers, sides, and drinks.
              </p>
              <p>
                Whether you're craving a classic cheeseburger or something a
                little more adventurous, like our signature "Burger of the
                Month," we've got something for everyone. And if you're looking
                for something a little lighter, we also offer salads and
                vegetarian options.
              </p>
              <p>
                At Burger Hub, we believe in giving back to our community.
                That's why we support local charities and organizations, and
                we're always looking for ways to make a positive impact on the
                world around us.
              </p>
              <p>
                So why not stop by Burger Hub today and experience the best
                burgers in town? We can't wait to serve you!
              </p>
            </div>
          </div>
        </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  main.appendChild(div);
  main.appendChild(footer());

  return main;
};

export default about;
