function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const span =document.querySelector('.color');
button.addEventListener('click', changesColor);
function changesColor(event) {
const active = getRandomHexColor();
span.textContent = active;
document.body.style.backgroundColor = active;
}