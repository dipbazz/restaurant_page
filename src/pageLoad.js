const pageLoad = () => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.innerHTML = `
    <header class="navbar">
      <div class="logo">
        <a href="#">Hungry Kitchen</a>
      </div>

      <div class="nav-menu">
        <ul class="nav-menu-list">
          <li class="nav-menu-item"><a href="#" class="nav-menu-link active" data-target="#home">Home</a></li>
          <li class="nav-menu-item"><a href="#" class="nav-menu-link" data-target="#menu">Menu</a></li>
          <li class="nav-menu-item"><a href="#" class="nav-menu-link" data-target="#about">About</a></li>
          <li class="nav-menu-item"><a href="#" class="nav-menu-link" data-target="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  `;
  root.appendChild(element);
};

export default pageLoad;
