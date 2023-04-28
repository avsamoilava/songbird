export default function showRightAnswer(bird) {
  const image = document.querySelector('.current__photo');
  const birdName = document.querySelector('.current__name');
  image.setAttribute('src', bird.image);
  birdName.textContent = bird.name;
}
