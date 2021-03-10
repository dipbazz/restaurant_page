import pageLoad from './pageLoad'
import homePage from './homePage'
import menuPage from './menuPage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'

const changeTabContent = (item) => {
  document.querySelectorAll('.nav-menu-link').forEach((element) => {
    element.classList.remove('active');
  });

  document.querySelectorAll('.tab-content').forEach((element) => {
    element.classList.remove('active');
  });
  const target = item.getAttribute('data-target');
  item.classList.add('active');
  document.querySelector(target).classList.add('active');
}

document.querySelectorAll('.nav-menu-link').forEach((item) => {
  item.addEventListener('click', () => {
    changeTabContent(item)
  });
});

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('[data-target="#menu"]').click();
})
