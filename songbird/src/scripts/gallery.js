import birdsData from "./birds";
import audioControl from './audio';


const data = birdsData.flat();
const gallery = document.querySelector('.gallery__container');
const flags = {
  isPlay: false
}
renderGallery(data, gallery);

function renderGallery(array, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'gallery__wrapper';

  const slider = document.createElement('div');
  slider.className = 'gallery__slider';
  wrapper.append(slider);
  container.append(wrapper);

  const btns = document.createElement('div');
  btns.className = 'gallery__controls';

  const prev = document.createElement('button');
  prev.className = 'gallery__prev';

  const next = document.createElement('button');
  next.className = 'gallery__next';
  btns.append(prev, next);
  container.append(btns);



  array.forEach(el => {
    const song = new Audio(el.audio);
    const card = document.createElement('div');
    card.className = 'gallery__card';

    const item = document.createElement('div');
    item.className = 'gallery__item';


    const imageBox = document.createElement('div');
    imageBox.className = 'gallery__photo';

    const img = document.createElement('img');
    img.className = 'gallery__image';
    img.setAttribute('src', el.image);
    img.setAttribute('alt', `${el.name}-photo`);
    imageBox.append(img);

    const name = document.createElement('div');
    name.className = 'gallery__name';
    name.textContent = el.name;

    const spec = document.createElement('div');
    spec.className = 'gallery__spec';
    spec.textContent = el.species;

    const down = document.createElement('button');
    down.className = 'gallery__down';
    down.addEventListener('click', (e) => {
      e.target.nextElementSibling.classList.toggle('_unhidden');
      e.target.classList.toggle('_rotate');
    })

    const hiddenBox = document.createElement('div');
    hiddenBox.className = 'gallery__hidden';

    const description = document.createElement('div');
    description.className = 'gallery__description';
    description.textContent = el.description;

    const playBox = document.createElement('div');
    playBox.className = 'gallery__player gallery-player';

    const btnBox = document.createElement('div');
    btnBox.className = 'gallery-player__play';
    btnBox.addEventListener('click', (e) => {
      audioControl.handlerAudio(song, flags, 'isPlay', e.target);
    })

    const playSong = document.createElement('button');
    playSong.className = 'gallery-player__btn audio-btn';

    const playRange = document.createElement('input');
    playRange.className = 'gallery-player__range audio-range';
    playRange.addEventListener('input', (e) => {
      audioControl.changeProgress(e.target, song);
    })

    const timeBox = document.createElement('div');
    timeBox.className = 'gallery-player__time';

    const timeStart = document.createElement('div');
    timeStart.className = 'gallery-player__time_start';
    timeStart.textContent = '00:00';

    const timeEnd = document.createElement('div');
    timeEnd.className = 'gallery-player__time_end';
    timeEnd.textContent = '00:00';


    const playerWrap = document.createElement('div');
    playerWrap.className = 'gallery-player__wrapper';

    const volumeBox = document.createElement('div');
    volumeBox.className = 'gallery-player__volume volume';

    const volumeBtn = document.createElement('button');
    volumeBtn.className = 'gallery-volume__btn volume-btn';
    volumeBtn.addEventListener('click', (e) => {
      audioControl.muteSound(e.target, song);
    })

    const volumeRange = document.createElement('input');
    volumeRange.setAttribute('type', 'range');
    volumeRange.className = 'volume__range audio-range';
    volumeRange.addEventListener('input', (e) => {
      audioControl.changeVolume(e.target, song, volumeBtn);
    })


    volumeBox.append(volumeBtn, volumeRange);

    playRange.setAttribute('type', 'range');
    playRange.setAttribute('value', 0);

    timeBox.append(timeStart, timeEnd);
    playerWrap.append(playRange, timeBox, volumeBox);
    btnBox.append(playSong);

    playBox.append(btnBox, playerWrap);

    hiddenBox.append(description, playBox);
    item.append(imageBox, name, spec, down, hiddenBox);

    card.append(item);
    slider.append(card);
    song.addEventListener('timeupdate', () => {
      audioControl.showAudioProgress(song, playRange, timeEnd, timeStart)
    })

  });


}

const prevBtn = gallery.querySelector('.gallery__prev');
const nextBtn = gallery.querySelector('.gallery__next');

const card = gallery.querySelector('.gallery__card');
const ribbon = gallery.querySelector('.gallery__slider');
let offset = 0;


nextBtn.addEventListener('click', function () {
  let margin = Number(window.getComputedStyle(card, null).getPropertyValue("margin-right").split('px').join(''));
  let width = card.offsetWidth + 2 * margin;
  offset += width;
  if (offset > width*(data.length-3)){
    offset = 0;
  }
  ribbon.style.transform = `translate(${-offset}px)`;
  console.log(width, offset)
})

prevBtn.addEventListener('click', function () {
  let margin = Number(window.getComputedStyle(card, null).getPropertyValue("margin-right").split('px').join(''));
  let width = card.offsetWidth + 2 * margin;
  offset -= width;
  if (offset < 0){
    offset = width*(data.length-3);
  }
  ribbon.style.transform = `translate(${-offset}px)`;
  console.log(width, offset)
})