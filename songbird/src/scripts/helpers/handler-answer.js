
export default function handlerAnswer(item, lvlBirds, rightAnswer, fn, isComplete) {
  let rightBird;
  lvlBirds.forEach(el => {
    if (el.id === rightAnswer) {
      rightBird = el;
    }
  })

  if (item.children[1].textContent == rightBird.name) {
    if(!isComplete){
      item.classList.add('options__item_right');
    }
    
    fn(rightBird);
    return true;
  } else {
    if(!isComplete){
    item.classList.add('options__item_wrong');
    }
  }
  return false;
}
