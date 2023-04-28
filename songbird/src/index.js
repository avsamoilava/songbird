import './index.html';
import './assets/styles/main.scss';
import './scripts/game';
import './scripts/gallery';
import './scripts/burger'

import renderStartPage from './scripts/start-page';
import tumblerLinks from './scripts/helpers/tumbler-links';




renderStartPage();
const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(link => {
  let mod = link.classList[1].replace(link.classList[0]+'_', '');
  link.addEventListener('click', ()=>{
    tumblerLinks(mod);
  })
})



console.log(`260/270: реализовано все, кроме перевода на два языка`)