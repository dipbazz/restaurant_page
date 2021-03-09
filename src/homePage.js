
const homePage = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add(...['tab-content', 'activ']);
  element.setAttribute('id', 'home');

  element.innerHTML =
  `
  <div class="hero homepage">
    <h1 class="heading">Are you hungry?</h1>
    <p class="text">Have a quick look of our menu and order what you want.</p>

    <a href="#" class="btn menu-btn">Menu</a>
  </div>
  `
  root.appendChild(element);
})();

export default homePage;
