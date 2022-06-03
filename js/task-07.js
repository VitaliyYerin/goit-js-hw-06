const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function handleInputChange (event) {
    const valueInput = event.target.value;
    span.style.fontSize = `${valueInput}px`;
}

input.addEventListener("input", handleInputChange);