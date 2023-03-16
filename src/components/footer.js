const footer = () => {
  const footer = document.createElement("footer");
  const html = `
  <p>
    Copyright &copy; 2023 <a href="">Mustafa Hassan</a> - All Rights
    Reversed.
  </p>`;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

export default footer;
