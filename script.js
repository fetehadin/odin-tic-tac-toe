// // 
// // console.log(playerMarker)
// const board = [
//  ['', '', ''],
//  ['', '', ''],
//  ['', '', '']
// ];
// let playerMarker;
// let computerMarker;
// const xmarkerBtn = document.querySelector('.markerBtn.x');
// const omarkerBtn = document.querySelector('.markerBtn.o');
// const cells = document.querySelectorAll('.cell')
// const turn = document.querySelector('.turn')


// turn = player
// function swapTurns(){
//     if(turn==player){
//         turn = computer
//     }
//     else{
//         turn = player
//     }
// }

// function checkWin(board, player) {

//     // check rows
//     for (let row = 0; row < 3; row++) {
//         if (
//             board[row][0] === player &&
//             board[row][1] === player &&
//             board[row][2] === player
//         ) {
//             return true;
//         }
//     }
//     for (let col = 0; col < 3; col++) {
//         if (
//             board[0][col] === player &&
//             board[1][col] === player &&
//             board[2][col] === player
//         ) {
//             return true;
//         }
//     }
//     if (
//         board[0][0] === player &&
//         board[1][1] === player &&
//         board[2][2] === player
//     ) {
//         return true;
//     }
//     if (
//         board[0][2] === player &&
//         board[1][1] === player &&
//         board[2][0] === player
//     ) {
//         return true;
//     }
//     return false;
// }

// xmarkerBtn.addEventListener('click',()=>{
//         playerMarker = 'x';
//         computerMarker = 'o';
            
//     })
// omarkerBtn.addEventListener('click',()=>{
//         playerMarker = 'o';
//         computerMarker = 'x'
            
//     })

// cells.forEach(cell =>{
//     cell.addEventListener('click',()=>{
//         board[row][col] = currentPlayer;
//         cell.classList.add(playerMarker);
// })
// })

// // the player will start the game

// // change the cell value wich clicked by player to plyer marker
// // call the check function and check if the player mark is equal to statements
// // next move to computer to empty cells
// // call the check function and check if the player mark is equal to statements
// // game over when all cells are filled with either x or o

// // const demoo = [[],[],[]]
// // demoo[0][0] = zeroZero;  //id selector to the cell and change cell value on the array
// // demoo[0][1] = zeroOne;
// // demoo[0][2] = zeroTwo;
// // demoo[1][0] = OneZero;
// // demoo[1][1] = OneOne;
// // demoo[1][2] = OneTwo;
// // demoo[2][0] = TwoZero;
// // demoo[2][1] = TwoOne;
// // demoo[2][2] = TwoTwo;

// // if(
// // demoo[0][0]==demoo[0][1] && demoo[0][1]==demoo[0][2] ||
// // demoo[1][0]==demoo[1][1] && demoo[1][1]==demoo[1][2] ||
// // demoo[2][0]==demoo[2][1] && demoo[2][1]==demoo[2][2] ||
// // demoo[0][0]==demoo[1][0] && demoo[1][0]==demoo[2][0] ||
// // demoo[0][1]==demoo[1][1] && demoo[1][1]==demoo[2][1] ||
// // demoo[0][2]==demoo[1][2] && demoo[1][2]==demoo[2][2] ||
// // demoo[0][0]==demoo[1][1] && demoo[1][1]==demoo[2][2] ||
// // demoo[0][2]==demoo[1][1] && demoo[1][1]==demoo[2][0]
// // ){
// //     winner = currentTurn;
// // }
// // else{
// //     draw()
// // }


const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let playerMarker;
let computerMarker;
let currentPlayer;
let gameOver = false;
let playerScore = 0;
let opponentScore = 0;


const modeSelect = document.querySelector('.player');
const xmarkerBtn = document.querySelector('.markerBtn.x');
const omarkerBtn = document.querySelector('.markerBtn.o');
const computerRoundScore = document.querySelector('.computerScore');
const playerRoundScore = document.querySelector('.playerScore')

const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('.turn');
const winningMessage = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');


playerRoundScore.textContent = playerScore;
computerRoundScore.textContent = opponentScore;

// select marker buttons
xmarkerBtn.addEventListener('click', () => {
    playerMarker = 'x';
    computerMarker = 'o';
    currentPlayer = playerMarker;
    turn.textContent = `Current Turn: ${currentPlayer.toUpperCase()}`;
});
omarkerBtn.addEventListener('click', () => {
    playerMarker = 'o';
    computerMarker = 'x';
    currentPlayer = playerMarker;
    turn.textContent = `Current Turn: ${currentPlayer.toUpperCase()}`;
});


// swap turns
function swapTurns() {
    if (currentPlayer === playerMarker) {
        currentPlayer = computerMarker;
    }
    else {
        currentPlayer = playerMarker;
    }
    turn.textContent = `Current Turn: ${currentPlayer.toUpperCase()}`;
}

function checkWin(board, player) {
    for (let row = 0; row < 3; row++) {
        if (
            board[row][0] === player && board[row][1] === player && board[row][2] === player
        ) {
            return true;
        }
    }
    for (let col = 0; col < 3; col++) {
        if (
            board[0][col] === player && board[1][col] === player && board[2][col] === player
        ) {
            return true;
        }
    }
    if (
        board[0][0] === player && board[1][1] === player && board[2][2] === player
    ) {
        return true;
    }
    if (
        board[0][2] === player && board[1][1] === player && [2][0] === player
    ) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function computerMove() {
    if (gameOver) return;
    let emptyCells = [];
    cells.forEach(cell => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        if (board[row][col] === '') {
            emptyCells.push(cell);
        }
    });
    if (emptyCells.length === 0) return;
    const randomCell =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const row = randomCell.dataset.row;
    const col = randomCell.dataset.col;
    board[row][col] = computerMarker;

    randomCell.classList.add(computerMarker);
    if (checkWin(board, computerMarker)) {
        opponentScore++;
        computerRoundScore.textContent = opponentScore;
        swal(`${currentPlayer.toUpperCase()} Wins Round`)
        gameOver = true;
        checkFinalWinner();
        setTimeout(restartRound, 1000);
        return;
    }

    if (checkDraw()) {
        winningMessage.textContent = 'Draw';
        gameOver = true;
        setTimeout(restartRound, 1000);
        return;
    }
    swapTurns();
}

function checkFinalWinner() {
    if (playerScore === 3) {
        swal("Game Over", "Player Wins The Match!", "success");
        resetMatch();
    }
    if (opponentScore === 3) {
        if (modeSelect.value === 'computer') {
            swal("Game Over", "Computer Wins The Match!", "error");
        }
        else {
            swal("Game Over", "Player 2 Wins The Match!", "success");
        }
        resetMatch();
    }
}

function restartRound() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            board[row][col] = '';
        }
    }
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
    });
    gameOver = false;
    currentPlayer = playerMarker;
    winningMessage.textContent = '';
    turn.textContent =
        `Current Turn: ${currentPlayer.toUpperCase()}`;
}
// full reset
function resetMatch() {
    playerScore = 0;
    opponentScore = 0;
    playerRoundScore.textContent = playerScore;
    computerRoundScore.textContent = opponentScore;
    restartRound();
}
// click handling
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (!playerMarker) {
            winningMessage.textContent =
                'Select X or O first';
            return;
        }
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        if (board[row][col] !== '') return;
        board[row][col] = currentPlayer;
        cell.classList.add(currentPlayer);
        // player win
        if (checkWin(board, currentPlayer)) {
            playerScore++;
            playerRoundScore.textContent = playerScore;
            swal(`${currentPlayer.toUpperCase()} Wins Round`)
            gameOver = true;
            checkFinalWinner();
            setTimeout(restartRound, 1000);
            return;
        }
        if (checkDraw()) {
            winningMessage.textContent = 'Draw';
            gameOver = true;
            setTimeout(restartRound, 1000);
            return;
        }
        swapTurns();
        // computer mode
        if (
            modeSelect.value === 'computer' &&
            currentPlayer === computerMarker
        ) {
            setTimeout(computerMove, 500);
        }
    });
});
// restart button
restartButton.addEventListener('click', resetMatch);