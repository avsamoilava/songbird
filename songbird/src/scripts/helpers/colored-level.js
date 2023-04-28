export default function coloredLevel(i, data) {
  data.forEach(el => {
    if (el.classList.contains('list-quiz__item_active')) {
      el.classList.remove('list-quiz__item_active');
    }
  })

  data[i].classList.add('list-quiz__item_active');
}