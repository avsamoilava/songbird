import birdsData from './birds';
import random from './helpers/randomizer';
import audioControl from './audio';
import showBirdInfo from './helpers/bird-info';
import coloredLevel from './helpers/colored-level';
import showBirds from './helpers/show-birds';
import handlerAnswer from './helpers/handler-answer';
import showRightAnswer from './helpers/show-right-answer';
import returnOriginal from './helpers/default-stat';
import results from './helpers/show-results';
import right from '../assets/sounds/right-sound.mp3';
import wrong from '../assets/sounds/wrong-sound.mp3';
import audio from './audio';


const options = document.querySelectorAll('.options__item');
const levels = document.querySelectorAll('.list-quiz__item');
const nextLevel = document.querySelector('.quiz__btn');
export const scoreBox = document.querySelector('.quiz__score');
const playAnswerBtn = document.querySelector('.song__btn');
const currVolumeBtn = document.querySelector('.song__volume>.volume__btn');
const curVolumeRange = document.querySelector('.song__volume>.volume__range');
const answerProgress = document.querySelector('.song__range');
const curTimeBox = document.querySelector('.song__time_start');
const genTimeBox = document.querySelector('.song__time_end');


let answerBirdSong = new Audio();
let birdInfoSong = new Audio();
const rightSound = new Audio(right);
const wrongSound = new Audio(wrong);

let currentLevel = 0;
let score = 0;
let complete = false;

let count = 5;
let flags = {
  isCurrentPlay: false,
  isBirdPlay: false
}

let birds, number, rightAnswer;


export function renderLevel(lvl, data) {
  complete = false;
  if (lvl === 0) {
    currentLevel = 0;
    score = 0;
  }

  birds = data[lvl];
  number = random(1, data[lvl].length);
  rightAnswer = birds.find(el => el.id === number);
  answerBirdSong = new Audio(rightAnswer.audio);
  //console.log(rightAnswer);

  coloredLevel(lvl, levels);
  showBirds(birds, options);
  nextLevel.disabled = true;

  options.forEach(option => {
    option.className = 'options__item'; //* сброс классов-модификаторов
  })

  const info = document.querySelector('.bird-info');
  info.innerHTML = 'Прослушайте голос птицы и выберите правильный вариант ответа';

  answerBirdSong.addEventListener('timeupdate', () => {
    audioControl.showAudioProgress(answerBirdSong, answerProgress, genTimeBox, curTimeBox);
  })

  answerBirdSong.addEventListener('ended', () => {
    audioControl.resetProgress(answerProgress);
    audioControl.stopAudio(answerBirdSong, playAnswerBtn);
  })

  answerProgress.addEventListener('input', () => {
    audioControl.changeProgress(answerProgress, answerBirdSong)
  })
}


playAnswerBtn.addEventListener('click', function () {
  audioControl.handlerAudio(answerBirdSong, flags, 'isCurrentPlay', this);
})
curVolumeRange.addEventListener('input', () => {
  audioControl.changeVolume(curVolumeRange, answerBirdSong, currVolumeBtn)
})
currVolumeBtn.addEventListener('click', (e)=> {
  audioControl.muteSound(e.target, answerBirdSong);

})


options.forEach((option) => {
  option.addEventListener('click', function () {
    audioControl.stopAudio(birdInfoSong);
    let bird = birds.find(el => el.name === option.children[1].textContent);
    birdInfoSong = new Audio(bird.audio);
    showBirdInfo(bird);

    if (handlerAnswer(option, birds, number, showRightAnswer, complete) && !complete) {
      score += count > 0 ? count : 0;
      scoreBox.textContent = `Score: ${score}`;
      audioControl.pauseAudio(answerBirdSong, playAnswerBtn);
      audioControl.answerSoundPlay(rightSound, 0.2);
      complete = true;
      nextLevel.disabled = false;

      if (currentLevel === birdsData.length - 1) {
        results.showResults(score, birdsData);
        nextLevel.disabled = true;
      } else {
        nextLevel.disabled = false;
      }
    };

    if (!complete) {
      count--;
      audioControl.answerSoundPlay(wrongSound, 0.2);
    }

    const playSongBtn = document.querySelector('.player__btn');
    const range = document.querySelector('.player__range');
    const birdCurTime = document.querySelector('.player__time_start');
    const birdGenTime = document.querySelector('.player__time_end');

    playSongBtn.addEventListener('click', function () {
      audioControl.handlerAudio(birdInfoSong, flags, 'isBirdPlay', this);
    });

    birdInfoSong.addEventListener('timeupdate', () => {
      audioControl.showAudioProgress(birdInfoSong, range, birdGenTime, birdCurTime);
    })

    birdInfoSong.addEventListener('ended', () => {
      audioControl.resetProgress(range);
      audioControl.stopAudio(birdInfoSong, playSongBtn);
    })

    range.addEventListener('input', ()=> {
      audioControl.changeProgress( range, birdInfoSong);
    })

    const volumeBtn = document.querySelector('.player__volume>.volume__btn');
    const volumeRange = document.querySelector('.player__volume>.volume__range');

    volumeBtn.addEventListener('click', (e)=>{
      audioControl.muteSound(e.target, birdInfoSong);
    })

    volumeRange.addEventListener('input', (e)=>{
      audioControl.changeVolume(e.target, birdInfoSong, volumeBtn);
    })
  })
})

if (score === 30) {
  let btn = document.querySelector('.results__restart');
  btn.addEventListener('click', () => {
    complete = false;
    score = 0;
    currentLevel = 0;
  })
}

nextLevel.addEventListener('click', () => {
  audioControl.stopAudio(birdInfoSong);
  audioControl.stopAudio(answerBirdSong);
  audioControl.stopAudio(rightSound);
  audioControl.stopAudio(wrongSound);
  currentLevel++;
  returnOriginal();
  renderLevel(currentLevel, birdsData);
  
  count = 5;
  complete = false;
});