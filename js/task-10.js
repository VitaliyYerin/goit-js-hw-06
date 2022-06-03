const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxWrap = document.querySelector('#boxes');
const input = document.querySelector('input');
let elSizeBox = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function amountValue () {
  const amount = input.value;
  createBoxes(amount);
}

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    let divEl = document.createElement('div');
    divEl.style.width = `${elSizeBox}px`;
    divEl.style.height = `${elSizeBox}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elSizeBox += 10;
    boxWrap.appendChild(divEl);
  }
}

const destroyElements = () => {
  const allElements = boxWrap.querySelectorAll('div');
  allElements.forEach((el) => {el.remove()});
  input.value = "";
  elSizeBox = 30;
}

btnCreate.addEventListener("click",amountValue);
btnDestroy.addEventListener("click",destroyElements);
