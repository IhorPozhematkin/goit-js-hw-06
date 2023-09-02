const slider = document.querySelector('#font-size-control');
const fontSize = document.querySelector('#text');
fontSize.style.fontSize = '56px';


slider.addEventListener('input', changesSize);
function changesSize() {
    const size = Number(slider.value);
    fontSize.style.fontSize = `${size * 1.12}px`;
};






