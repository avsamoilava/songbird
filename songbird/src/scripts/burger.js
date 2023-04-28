const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const links = document.querySelectorAll('.header__link');

burger.addEventListener('click', (e) => {
  e.target.classList.toggle('header__burger_active');
  menu.classList.toggle('header__list_active');
})

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('header__burger_active');
    menu.classList.remove('header__list_active');
  })
})