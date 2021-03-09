const aboutPage = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.setAttribute('id', 'about');

  element.innerHTML =
  `
    <div class="hero">
      <h1 class="heading">Are you hungry?</h1>
      <p class="text">From about to test.</p>

      <a href="#" class="btn menu-btn">Menu</a>
    </div>
  `
  root.appendChild(element);
})();

export default aboutPage;
