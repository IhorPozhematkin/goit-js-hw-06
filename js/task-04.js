const span = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
  
let counter = Number(span.textContent);
decrement.addEventListener('click', () => {
    counter -=  1;
    span.textContent = counter;
});
increment.addEventListener('click', () => {
    counter +=  1;
    span.textContent = counter;
});