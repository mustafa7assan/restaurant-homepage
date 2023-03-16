const header = () => {
  const header = document.createElement("header");
  const html = `
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">BURGER HUB</h1>
      <ul class="links">
        <li><a href="#" class="link">Home</a></li>
        <li><a href="#" class="link">Menu</a></li>
        <li><a href="#" class="link">Contact us</a></li>
        <li><a href="#" class="link">About</a></li>
      </ul>
    </div>
  </nav>
`;
  header.insertAdjacentHTML("afterbegin", html);
  return header;
};

export default header;
