

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    bodyElement: document.body,
  };

let color;

refs.startBtn.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
    color = setInterval(() => { refs.bodyElement.style.backgroundColor = getRandomHexColor() }, 1000);
      refs.startBtnElem.disabled = true;
      refs.stopBtnElem.disabled = false;

}

refs.buttonStop.addEventListener('click', onButtonStopClick);

function onButtonStopClick() {
    clearInterval(color);
    refs.stopEl.disabled = true;
    refs.startEl.disabled = false;
}