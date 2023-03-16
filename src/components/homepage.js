import header from "./header";
import hero from "./hero";
import photosGrid from "./photosGrid";
import footer from "./footer";
const homepage = () => {
  const main = document.createElement("main");
  main.appendChild(header());
  main.appendChild(hero());
  main.appendChild(photosGrid());
  main.appendChild(footer());
  return main;
};

export default homepage;
