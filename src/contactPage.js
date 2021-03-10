const contactPage = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.setAttribute('id', 'contact');

  element.innerHTML =
  `
  <div class="hero">
    <div class="menu-container text-center">
      <div class="center-card">
        <h1 class="heading">Contact us.</h1>

        <form action="#">
          <div class="form-group">
            <input type="text" id="name" class="form-control"  placeholder="Name">
          </div>

          <div class="form-group">
            <input type="email" id="email" class="form-control"  placeholder="email">
          </div>

          <div class="form-group">
            <textarea name="message" rows="3" class="form-control" placeholder="Your message ..."></textarea>
          </div>

          <div>
             <input type="submit" class="btn menu-btn" value="submit">
          </div>
        </form>


        <div class="contact">
          <p class="contact-msg">Reach out to us directly.</p>
          <p class="contact-number">+977 123-2324-232</p>
        </div>

      </div>
    </div>
  </div>
  `
  root.appendChild(element);
})();

export default contactPage;
