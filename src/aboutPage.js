const aboutPage = () => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.setAttribute('id', 'about');

  element.innerHTML = `
  <div class="hero">
    <div class="menu-container text-center">
      <div class="center-card">
        <h1 class="heading">About project</h1>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Earum natus eius ullam enim illum, voluptas architecto aperiam nam quod facere.</p>

        <div class="contact">
          <p> Created and designed by <a href="https://github.com/dipbazz" class="link">Dipesh Bajgain</a></p>
        </div>
      </div>
    </div>
  </div>
  `;
  root.appendChild(element);
};

export default aboutPage;
