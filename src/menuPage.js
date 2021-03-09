const menuPage = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.classList.add('active');
  element.setAttribute('id', 'menu');

  element.innerHTML =
  `
    <div class="hero">
      <ul
    </div>
  `
  root.appendChild(element);
})();

export default menuPage;
