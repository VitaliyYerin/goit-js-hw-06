const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function handleInputChange () {
    span.textContent = input.value || 'Anonymous';
}

input.addEventListener("input", handleInputChange);




