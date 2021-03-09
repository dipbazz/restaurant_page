const menuPage = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.setAttribute('id', 'menu');

  element.innerHTML =
  `
    <div class="hero-text">
      <h1 class="heading">Are you hungry?</h1>
      <p class="text">From menu to test.</p>

      <a href="#" class="btn menu-btn">Menu</a>
    </div>
  `
  root.appendChild(element);
})();

export default menuPage;
