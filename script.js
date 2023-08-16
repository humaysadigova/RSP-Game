const firstPlayerTitle = document.querySelector("#firstPlayerTitle");
const firstPlayerScore = document.querySelector("#firstPlayerScore");
const firstPlayerImage = document.querySelector("#firstPlayerImage");

const secondPlayerTitle = document.querySelector("#secondPlayerTitle");
const secondPlayerScore = document.querySelector("#secondPlayerScore");
const secondPlayerImage = document.querySelector("#secondPlayerImage");

const cardText1 = document.querySelector("#cardText1");
const cardText2 = document.querySelector("#cardText2");

const introContent = document.querySelector("#introContent");
const mainContent = document.querySelector("#mainContent");
const startBtn = document.querySelector("#startBtn");

let handSigns = ['p', 'r', 's'];
let player1Score = 0;
let player2Score = 0;

function randomSelector(array) {
    randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum]
}

startBtn.addEventListener('click', function(){
    introContent.classList.add('d-none')
    mainContent.classList.remove('d-none')
})

function showHandMv(firstPl, secondPl) {
    firstPlayerScore.innerText = `Score: ${player1Score}`;
    secondPlayerScore.innerText = `Score: ${player2Score}`;

    firstPlayerImage.src = `./images/${firstPl}.png`;
    secondPlayerImage.src =`./images/${secondPl}.png`;
}

function isWin(isPlayerWin) {
    firstPlayerTitle.innerText = isPlayerWin ? 'WIN' : 'LOSE';
    secondPlayerTitle.innerText = !isPlayerWin ? 'WIN' : 'LOSE';

    firstPlayerTitle.classList.remove('text-success', 'text-danger')
    secondPlayerTitle.classList.remove('text-success', 'text-danger')

    firstPlayerTitle.classList.add(`text-${isPlayerWin ? 'success' : 'danger'}`);
    secondPlayerTitle.classList.add(`text-${!isPlayerWin ? 'success' : 'danger'}`);

}

function startGame(e) {
    let firstPlayerChoose = e.key;

    if (!handSigns.includes(firstPlayerChoose)){
        alert('Please select the correct key');
        return;
    }
    
    let secondPlayerChoose = randomSelector(handSigns);

    if( (firstPlayerChoose === 'p' && secondPlayerChoose === 'r') ||
        (firstPlayerChoose === 'r' && secondPlayerChoose === 's') ||
        (firstPlayerChoose === 's' && secondPlayerChoose === 'p')
    ) {
        player1Score += 1;
        isWin(true);
        showHandMv(firstPlayerChoose, secondPlayerChoose);
    } else if(
        (firstPlayerChoose === 'p' && secondPlayerChoose === 'p') ||
        (firstPlayerChoose === 'r' && secondPlayerChoose === 'r') ||
        (firstPlayerChoose === 's' && secondPlayerChoose === 's')
    ) {
        firstPlayerTitle.innerText = 'DRAW';
        secondPlayerTitle.innerText = 'DRAW';

        firstPlayerTitle.classList.remove('text-success', 'text-danger',);
        secondPlayerTitle.classList.remove('text-success', 'text-danger',);

        firstPlayerTitle.classList.add('text-primary');
        secondPlayerTitle.classList.add('text-primary');

        showHandMv(firstPlayerChoose, secondPlayerChoose);
    } else {
        player2Score += 1;
        isWin();
        showHandMv(firstPlayerChoose, secondPlayerChoose);
        
    };

    if (firstPlayerImage.src.includes('p.png')){
        cardText1.innerText = 'Paper';
    } else if (firstPlayerImage.src.includes('r.png')) {
        cardText1.innerText = 'Rock';
    } else {
        cardText1.innerText = 'Scissors';
    };

    if (secondPlayerImage.src.includes('p.png')){
        cardText2.innerText = 'Paper';
    } else if (secondPlayerImage.src.includes('r.png')) {
        cardText2.innerText = 'Rock';
    } else {
        cardText2.innerText = 'Scissors';
    };

}

window.onkeydown = startGame;