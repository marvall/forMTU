const listenersSelector = {
    btnStart = document.querySelector(".start"),
    btnNewGame = document.querySelector(".new_game"),
    btnMore = document.querySelector(".more"),
    veiwPort = document.querySelector(".veiw_port"),
}

const boxesClassList = [danger, success, light, dark, empty];
const size = [10,15,20,25,30];
const position = [10,20,30,40,50,60,70,80,90];

const random = function (value){
    return value[Math.floor(Math.random() * value.length)]
}

const start = function (){

}

const newGame = function (){

}

const showMore = function (){

}
const game = function (){
    createBox();
}

const createBox = function (){
    let someBox = document.createElement('div');
    someBox.classList.add(`${random(boxesClassList)}`);
    let boxSize = random(size);
    someBox.setAttribute('style', 
    `width: ${boxSize}px; height: ${boxSize}px;
     position: absolute; top: ${random(position)}%; left: ${random(position)}%` );
    listenersSelector.veiwPort.appendChild(someBox); 
    
}

listenersSelector.btnStart.addEventListener('click', start());
listenersSelector.btnNewGame.addEventListener('click', newGame());
listenersSelector.btnSMore.addEventListener('click', showMore());
listenersSelector.veiwPort.addEventListener('click', game());