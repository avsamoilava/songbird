import startGame from "./start";
export default {
  showResults(result, data) {
    const resultBox = document.querySelector('.results');
    resultBox.innerHTML = '';
    const content = document.createElement('div');
    content.className = 'results__content';

    const max = data.length * (data[0].length - 1);
    let win = document.createElement('div');
    win.className = 'results__score';
    win.textContent = result < max ? `Вы набрали ${result} из ${max}. Можете пройти игру заново, хоть Вы и все равно молодец)` : `Урааа! Вы набрали максимальное количество баллов!`;

    let buttonsBox = document.createElement('div');
    buttonsBox.className = 'results__btns';


    let restart = document.createElement('button');
    restart.textContent = result < max ? 'Переиграть' : 'На главную';
    restart.className = 'results__restart btn';
    restart.addEventListener('click', ()=> {
      resultBox.classList.remove('_visible');
      
      document.querySelector('.quiz').classList.remove('_visible');
      if (result < max){
        startGame();
      } else {
        document.querySelector('.start').classList.add('_visible');
      }
    })
/* 
    let close = document.createElement('button');
    close.className = 'results__close'; */

    buttonsBox.append(restart);
    content.append(win, buttonsBox);
    resultBox.append(content);
    resultBox.classList.add('_visible');
   
  },

  handlerResults() {
  
  }
}