export default function tumblerLinks(selector){
  const blocks = document.querySelectorAll('.main__container>div');
  blocks.forEach(elem => {
    if (elem.classList.contains('_visible')) elem.classList.remove('_visible');
  })
  blocks.forEach(elem => {
    if(elem.classList.contains(selector)){
      elem.classList.add('_visible');
    }
  }) 
}