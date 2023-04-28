export default function showBirdInfo(data) {
  const container = document.querySelector('.bird-info');
  container.innerHTML = null;

  let imgBox = document.createElement('div');
  imgBox.className = 'bird-info__image';

  let img = document.createElement('img');
  img.className = 'bird-info__photo';
  img.setAttribute('src', data.image);

  imgBox.append(img);


  let name = document.createElement('div');
  name.className = 'bird-info__name';
  name.textContent = data.name;


  let spec = document.createElement('div');
  spec.className = 'bird-info__spec';
  spec.textContent = data.species;


  let bird = document.createElement('div');
  bird.className = 'bird-info__bird';

  let birdInfo = document.createElement('div');
  birdInfo.className = 'bird-info__info';




  let description = document.createElement('div');
  description.className = 'bird-info__description';
  description.textContent = data.description;

  

  let playBox = document.createElement('div');
  playBox.className = 'bird-info__player player';

  let btnBox = document.createElement('div');
  btnBox.className = 'player__play';

  let playSong = document.createElement('button');
  playSong.className = 'player__btn audio-btn';



  let playRange = document.createElement('input');
  playRange.className = 'player__range audio-range';

  let timeBox = document.createElement('div');
  timeBox.className = 'player__time';

  let timeStart = document.createElement('div');
  timeStart.className = 'player__time_start';
  timeStart.textContent = '00:00';

  let timeEnd = document.createElement('div');
  timeEnd.className = 'player__time_end';
  timeEnd.textContent = '00:00';


  let playerWrap = document.createElement('div');
  playerWrap.className = 'player__wrapper';

  let volumeBox = document.createElement('div');
  volumeBox.className = 'player__volume volume';

  let volumeBtn = document.createElement('button');
  volumeBtn.className = 'volume__btn volume-btn';

  let volumeRange = document.createElement('input');
  volumeRange.setAttribute('type', 'range');
  volumeRange.className = 'volume__range audio-range';

  volumeBox.append(volumeBtn, volumeRange);



  playRange.setAttribute('type', 'range');
  playRange.setAttribute('value', 0);

  timeBox.append(timeStart, timeEnd);
  playerWrap.append(playRange, timeBox, volumeBox);
  btnBox.append(playSong);

  playBox.append(btnBox, playerWrap);
  birdInfo.append(name, spec, description);
  bird.append(imgBox, birdInfo);

  container.append(bird, playBox);
}