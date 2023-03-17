import header from "./header";
import footer from "./footer";
import burgerCard from "./burgerCard";
const menu = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  const container = document.createElement("div");
  const h2 = document.createElement("h2");
  const grid = document.createElement("div");
  div.classList.add("menu");
  container.classList.add("container");
  h2.textContent = "Menu";
  grid.classList.add("menu-grid");
  for (let i = 0; i < burgers.length; i++) {
    grid.appendChild(burgerCard(burgers[i], i));
  }
  container.appendChild(h2);
  container.appendChild(grid);
  div.appendChild(container);
  main.appendChild(header());
  main.appendChild(div);
  main.appendChild(footer());
  return main;
};

const burgers = [
  {
    name: "Classic Cheeseburger",
    description:
      "This burger is a classic for a reason. It usually consists of a beef patty, American cheese, lettuce, tomato, pickles, onions, and a special sauce. ",
    price: "8",
  },

  {
    name: "Bacon Cheeseburger",
    description:
      "Similar to the classic cheeseburger, but with the addition of crispy bacon on top of the beef patty. Price",
    price: "13",
  },

  {
    name: "Veggie Burger",
    description:
      " A vegetarian option, this burger typically includes a patty made of vegetables such as black beans, mushrooms, or lentils. It may also include toppings such as avocado, sprouts, or hummus",
    price: "9",
  },

  {
    name: "BBQ Burger",
    description:
      "This burger includes a beef patty, cheddar cheese, crispy onion rings, and barbecue sauce. It's a sweet and savory option that is sure to satisfy",
    price: "14",
  },
  {
    name: "Mushroom Swiss",
    description:
      "This burger includes a beef patty, Swiss cheese, sautéed mushrooms, and sometimes onions. It's a great option for mushroom lovers.",
    price: "10",
  },
  {
    name: "Double Cheeseburger",
    description:
      "This burger includes two beef patties instead of one, as well as double the amount of cheese and toppings. It's a hearty option for those with a big appetite",
    price: "16",
  },
  {
    name: "Hawaiian Burger",
    description:
      "This burger includes a beef patty, grilled pineapple, teriyaki sauce, and sometimes ham or bacon. It's a sweet and salty option that is popular in Hawaii. Price",
    price: "11",
  },
  {
    name: "Jalapeno Burger",
    description:
      "his burger includes a beef patty, pepper jack cheese, jalapeno peppers, and sometimes spicy mayo. It's a spicy option for those who like a little heat. Price",
    price: "12",
  },
];

export default menu;
