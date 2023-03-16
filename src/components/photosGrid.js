import img1 from "../img/grid-photo-1.jpg";
import img2 from "../img/grid-photo-2.jpg";
import img3 from "../img/grid-photo-3.jpg";
import img4 from "../img/grid-photo-4.jpg";
import img5 from "../img/grid-photo-5.jpg";
const photosGrid = () => {
  const grid = document.createElement("div");
  grid.classList.add("photos");
  const html = `
  <div class="container">
    <h2>Photos</h2>
    <div class="photos-grid">
      <div><img src="${img1}" alt="" /></div>
      <div><img src="${img3}" alt="" /></div>
      <div><img src="${img2}" alt="" /></div>
      <div><img src="${img5}" alt="" /></div>
      <div><img src="${img4}" alt="" /></div>
    </div>
  </div>`;
  grid.insertAdjacentHTML("afterbegin", html);
  return grid;
};

export default photosGrid;
