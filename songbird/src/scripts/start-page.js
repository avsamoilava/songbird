import startGame from './helpers/start';
export default function renderStartPage() {
  const container = document.querySelector('.start');

  const banner = document.createElement('div');
  banner.className = 'start__container';

  const title = document.createElement('h1');
  title.textContent = 'Songbird quiz';
  title.className = 'start__title';

  const text = document.createElement('p');
  text.textContent = 'Добро пожаловать в викторину про птичек! Попробуйте угадать птицу по голосу. Удачи!'; //'Welcome to the bird quiz! Try to guess the bird by its voice. Good luck!';
  text.className = 'start__greeting';


  const btnsBox = document.createElement('div');
  btnsBox.className = 'start__buttons';


  const startBtn = document.createElement('button');
  startBtn.className = 'start__btn start__btn_new-game btn';
  startBtn.textContent = 'Новая игра';
  startBtn.addEventListener('click', startGame)
 
  btnsBox.append(startBtn);

  banner.append(title, text, btnsBox);
  container.append(banner);
  container.classList.add('_visible');
}