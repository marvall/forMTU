const listenersSelector = {
  btnStart: document.querySelector('.start'),
  btnNewGame: document.querySelector('.new-game'),
  btnMore: document.querySelector('.more'),
  veiwPort: document.querySelector('.game-veiw-port'),
};

const boxesClassList = ['danger', 'success', 'light', 'dark', 'empty'];
const size = [10, 15, 20, 25, 30];
const position = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let time = 0;
let interval;

const random = function (value) {
  console.log('randome');

  return value[Math.floor(Math.random() * value.length)];
};

const start = function () {
  newGame();
};

const pause = function () {
  console.log('pause');
};

const newGame = function () {
  interval = setInterval(changeTime, 1000);
  time = 60;
  reset();
  game();
};

const showMore = function () {};

const game = function () {
  if (time !== 0) {
    createBox(random([0, 1, 2]));
    listenersSelector.veiwPort.addEventListener('click', clickBox);
  } else {
    gamefinish();
  }
};

const gamefinish = function () {
  reset();
};

const reset = function () {
  destroyAllBox();
  document.querySelector('.score').textContent = 0;
};

const createBox = function (value) {
  for (let i = 0; i < value; i += 1) {
    let someBox = document.createElement('div');
    someBox.classList.add(`${random(boxesClassList)}`);
    let boxSize = random(size);
    someBox.setAttribute(
      'style',
      `width: ${boxSize}px; height: ${boxSize}px;
     position: absolute; top: ${random(position)}%; left: ${random(position)}%`,
    );
    someBox.dataset.point = random([1, 2, 3]);
    listenersSelector.veiwPort.appendChild(someBox);
  }
};

const destroyAllBox = function () {
  listenersSelector.veiwPort.innerHTML = '';
};
const addTime = function (value) {
  time += value;
};
const setPoint = value => {
  /*function adds points to the total score*/
  let point = document.querySelector('.score');
  point.textContent = parseInt(point.textContent) + parseInt(value);
};
const clickBox = e => {
  if (e.target === e.currentTarget) {
    return;
  }
  let currentBox = e.target;
  setPoint(e.target.dataset.point);
  currentBox.remove();
  game();
};

function changeTime() {
  if (time === 0) {
    clearInterval(interval);
  } else {
    time -= 1;
    document.querySelector('.time-left').textContent = `${parseInt(time / 60)}:${time % 60}`;
  }
}

listenersSelector.btnStart.addEventListener('click', start);
listenersSelector.btnNewGame.addEventListener('click', newGame);
listenersSelector.btnMore.addEventListener('click', showMore);
