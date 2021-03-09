const pageLoad = (() => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.innerHTML =
  `
    <header class="navbar">
      <div class="logo">
        <a href="#">Hungry Kitchen</a>
      </div>

      <div class="menu">
        <ul class="menu-list">
          <li class="menu-item"><a href="#" class="menu-link active" data-target="#home">Home</a></li>
          <li class="menu-item"><a href="#" class="menu-link" data-target="#menu">Menu</a></li>
          <li class="menu-item"><a href="#" class="menu-link" data-target="#about">About</a></li>
          <li class="menu-item"><a href="#" class="menu-link" data-target="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  `
  root.appendChild(element);
})();

export default pageLoad;
