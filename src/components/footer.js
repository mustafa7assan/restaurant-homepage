const footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const html = `
 `;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

export default footer;
