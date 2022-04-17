const refs = {
  body: document.querySelector('body'),
  nameColor: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color')
};

refs.buttonChangeColor.addEventListener('click', onColorChange)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.nameColor.textContent = color;

}


