const refs = {
  colorButton: document.querySelector(".change-color"),
  currentColor: document.querySelector(".color"),
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.colorButton.addEventListener("click", (e) => {
  refs.currentColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.currentColor.textContent;
})