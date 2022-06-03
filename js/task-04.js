const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
let count = 0

function decrement() {
    if (count > 0) {
        count -= 1;
        counterValue.textContent = count;
    }
}

function increment() {
    count += 1;
    counterValue.textContent = count;
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);