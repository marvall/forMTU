const listenersSelector = {
  btnStart: document.querySelector('.start'),
  btnNewGame: document.querySelector('.new-game'),
  btnMore: document.querySelector('.more'),
  veiwPort: document.querySelector('.game-veiw-port'),
};

const boxesClassList = ['danger', 'success', 'light', 'dark', 'empty'];
const size = [10, 15, 20, 25, 30];
const position = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const random = function (value) {
  console.log('randome');

  return value[Math.floor(Math.random() * value.length)];
};

const start = function () {
  console.log('start');
  game();
};

const pause = function () {
  console.log('pause');
};

const newGame = function () {
  console.log('newGame');
};

const showMore = function () {};
const game = function () {
  console.log('game');
  createBox();
};

const createBox = function () {
  console.log('cretebox');
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
};

const destroyBox = function () {
  listenersSelector.veiwPort;
};
const addTime = function (value) {
  let point = document.querySelector('.time-left');
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
};

listenersSelector.btnStart.addEventListener('click', () => start());
listenersSelector.btnNewGame.addEventListener('click', () => newGame());
listenersSelector.btnMore.addEventListener('click', () => showMore());
listenersSelector.veiwPort.addEventListener('click', clickBox);
