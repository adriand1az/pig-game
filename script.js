'use strict';

// Labeling all of our variables
// Visual
let totalScorePlayer1Text = document.querySelector('#score--0');
let totalScorePlayer2Text = document.querySelector('#score--1');
let currentScorePlayer1Text = document.querySelector('#current--0');
let currentScorePlayer2Text = document.querySelector('#current--1');
let currentImage = document.querySelector('.dice');
//entire player section
let section1 = document.querySelector('.player--0')
let section2 = document.querySelector('.player--1')

// Buttons
let rollDiceButton = document.querySelector('.btn--roll')
let holdButton = document.querySelector('.btn--hold')
let newGameBUtton = document.querySelector('.btn--new')




// Game variables
let player1TotalScore = 0;
let player2TotalScore = 0;
const winningScore = 100

// Creating a random number function
let random = function () {
    return Math.trunc(Math.random() * 6) + 1;
};

// Players turn
let isPlayer1Turn = true;
let isPlayer2Turn = false;
//  Game logic

rollDiceButton.addEventListener('click', function () {
    let roll = random()

    // image function
    const changeImage = function () {
        for (let i = 0; i <= 6; i++) {
            if (roll !== i) {
                continue;
            }
            currentImage.src = `dice-${i}.png`
        }
    }

    if (player1TotalScore < winningScore && player2TotalScore < winningScore) {
        if (isPlayer1Turn) {

            if (roll === 1) {
                changeImage()
                player1TotalScore = 0;
                totalScorePlayer1Text.innerText = player1TotalScore;
                currentScorePlayer1Text.innerText = roll;
                section1.classList.remove('player--active')
                isPlayer1Turn = false;
                isPlayer2Turn = true;
                console.log(roll);
            } else {
                player1TotalScore += roll;
                totalScorePlayer1Text.innerText = player1TotalScore;
                console.log(roll);
                changeImage()
                currentScorePlayer1Text.innerText = roll;
            }

        } else if (isPlayer2Turn) {
            section2.classList.add('player--active')
            if (roll === 1) {
                changeImage()
                player2TotalScore = 0;
                totalScorePlayer2Text.innerText = player2TotalScore;
                currentScorePlayer2Text.innerText = roll;
                isPlayer2Turn = false;
                isPlayer1Turn = true;
            } else {
                changeImage()
                currentScorePlayer2Text.innerText = roll;
                player2TotalScore += roll;
                totalScorePlayer2Text.innerText = player2TotalScore;
                console.log(roll);
            }
        }

    } else { // winning section
        if (player1TotalScore >= winningScore) {
            console.log('player 1 wins')
        } else {
            console.log('player 2 wins')
        }
    }
})

// Hold function
holdButton.addEventListener('click', function () {
    isPlayer1Turn = !isPlayer1Turn;
    isPlayer2Turn = !isPlayer2Turn;
})

// Changing images


// newgame function
const newGame = function () {
    totalScorePlayer1Text.innerText = 0;
    totalScorePlayer2Text.innerText = 0;
    currentScorePlayer1Text.innerText = 0;
    currentScorePlayer2Text.innerText = 0;
    currentImage.src = "dice-5.png";
    player1TotalScore = 0;
    player2TotalScore = 0;
}

// New game button
newGameBUtton.addEventListener('click', newGame);