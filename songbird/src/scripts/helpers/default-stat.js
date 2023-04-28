import defaultImage from '../../assets/img/icons/bird.svg';
import audioControl from '../audio';
export default function returnOriginal(){
  document.querySelector('.current__photo').setAttribute('src', defaultImage);
  document.querySelector('.current__name').textContent = '*********';
  document.querySelector('.song__time_start').innerHTML = '00:00';
  document.querySelector('.song__time_end').innerHTML = '00:00';
  audioControl.resetProgress(document.querySelector('.song__range'));
  document.querySelector('.song__range').setAttribute('value', '0')
  
}