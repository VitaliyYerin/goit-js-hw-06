const body = document.querySelector("body");
const button = document.querySelector(".change-color")
const span = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`;
}

const changeColor =()=> {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
  console.log(color);
}

button.addEventListener("click",changeColor)