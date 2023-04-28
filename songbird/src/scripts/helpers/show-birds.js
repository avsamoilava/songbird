export default function showBirds(birds, options) {
  options.forEach((el, i) => {
    let children = el.children;
    children[1].textContent = birds[i].name;
  })
}
