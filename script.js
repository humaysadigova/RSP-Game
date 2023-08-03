const firstPlayerTitle = document.querySelector("#firstPlayerTitle");
const firstPlayerScore = document.querySelector("#firstPlayerScore");
const firstPlayerImage = document.querySelector("#firstPlayerImage");

const secondPlayerTitle = document.querySelector("#secondPlayerTitle");
const secondPlayerScore = document.querySelector("#secondPlayerScore");
const secondPlayerImage = document.querySelector("#secondPlayerImage");

let handSigns = ['p', 'r', 's'];
let player1Score = 0;
let player2Score = 0;

function randomSelector(array) {
    randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum]
}

function showHandMv(firstPl, secondPl) {
    firstPlayerScore.innerText = `Score: ${player1Score}`;
    secondPlayerScore.innerText = `Score: ${player2Score}`;

    firstPlayerImage.src = `./images/${firstPl}.png`;
    secondPlayerImage.src =`./images/${secondPl}.png`;
}

function isWin(isPlayerWin) {
    firstPlayerTitle.innerText = isPlayerWin ? 'WIN' : 'LOSE';
    secondPlayerTitle.innerText = !isPlayerWin ? 'WIN' : 'LOSE';

    firstPlayerTitle.classList.add(`text-${isPlayerWin ? 'success' : 'danger'}`);
    secondPlayerTitle.classList.add(`text-${!isPlayerWin ? 'success' : 'danger'}`)
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

        firstPlayerTitle.classList.add('text-dark');
        secondPlayerTitle.classList.add('text-dark');

        showHandMv(firstPlayerChoose, secondPlayerChoose);
    } else {
        player2Score += 1;
        isWin();
        showHandMv(firstPlayerChoose, secondPlayerChoose);
        
    }
}

window.onkeydown = startGame;