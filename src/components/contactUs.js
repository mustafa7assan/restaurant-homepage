import footer from "./footer";
const contactUs = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  div.classList.add("contact-us");
  const html = `
  <h2>Contact Us</h2>
  <div class="container">
    <form action="" class="contact-from">
      <div class="form-row">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="John Dough" required>
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input  type="email"  name="email" id="email" placeholder="example@gamil.com"  required/>
      </div>
      <div class="form-row">
        <label for="msg">Message</label>
        <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Write a message" required></textarea>
      </div>
      <div class="form-row">
        <button type="submit" class="btn">Send</button>
      </div>
    </form>
  </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  main.appendChild(div);
  main.appendChild(footer());

  return main;
};

export default contactUs;
