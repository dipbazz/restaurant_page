const menuPage = () => {
  const root = document.getElementById('content');
  const element = document.createElement('div');
  element.classList.add('tab-content');
  element.setAttribute('id', 'menu');

  element.innerHTML = `
  <div class="hero">
    <div class="menu-container">
        <ul class="card-list">
          <li class="card">
            <img src="./images/burger.png" alt="burger" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Chicken Burger</h2>
              <p class="card-subtitle">with extra crunchy</p>
              <span class="price">$8.2</span>
            </div>
          </li>

          <li class="card">
            <img src="./images/pizza.png" alt="pizza" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Pizza Margherita</h2>
              <p class="card-subtitle">tomatoes, sliced mozzarella, basil</p>
              <span class="price">$5</span>
            </div>
          </li>

          <li class="card">
            <img src="./images/hot-dog.png" alt="hot dog" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Hot dog</h2>
              <p class="card-subtitle">with sticky roasted onions</p>
              <span class="price">$4.2</span>
            </div>
          </li>

          <li class="card">
            <img src="./images/salad.png" alt="salad" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Mixed salad</h2>
              <p class="card-subtitle">vegetables, oats, rice, fruits</p>
              <span class="price">$10</span>
            </div>
          </li>

          <li class="card">
            <img src="./images/burger.png" alt="burger" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Veggie Burger</h2>
              <p class="card-subtitle">includes green leafs</p>
              <span class="price">$8.2</span>
            </div>
          </li>

          <li class="card">
            <img src="./images/salad.png" alt="salad" class="card-img">

            <div class="card-body">
              <h2 class="card-title">Mixed salad</h2>
              <p class="card-subtitle">vegetables, oats, rice, fruits</p>
              <span class="price">$10</span>
            </div>
          </li>
        </ul>
    </div>
  </div>
  `;
  root.appendChild(element);
};

export default menuPage;
