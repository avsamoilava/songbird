import returnOriginal from './default-stat';
import { renderLevel, scoreBox} from '../game';
import birdsData from '../birds';


export default function startGame(){
  document.querySelector('.quiz').classList.add('_visible');
  document.querySelector('.start').classList.remove('_visible'); 
  returnOriginal();
  renderLevel(0, birdsData);
  scoreBox.textContent = 'Score: 0';
}