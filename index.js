// Get buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const startButton = document.getElementById('startButton');
const instructions = document.getElementById('instructions');
const player1ScoreText = document.getElementById('player1Score');
const player2ScoreText = document.getElementById('player2Score');
const winnerText = document.getElementById('winnerText');
let gameState = false;
let opponentChoice;
let player1Score;
let player2Score;

// Unhide game content
// Hide start button
startButton.addEventListener('click', () => {
    instructions.hidden = false;
    startButton.hidden = true;
    gameState = true;
    winnerText.hidden = false;
    rockButton.hidden = false;
    scissorsButton.hidden = false;
    paperButton.hidden = false;
    player1Score = 0;
    player2Score = 0;
})

// Get opponent choice
const opponent = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

// Get winner
const compareChoice = (action) => {
    opponentChoice = opponent();
    // Rock
    if(opponentChoice == 'rock' && action == "rock") {
        winnerText.innerText = "You choose rock. Opponent choose rock. It's a tie."
    }
    else if(opponentChoice == 'paper' && action == "rock") {
        player2Score += 1;
        winnerText.innerText = "You choose rock. Opponent choose paper. Opponent won."
    }
    else if(opponentChoice == 'scissors' && action == "rock") {
        player1Score += 1;
        winnerText.innerText = "You choose rock. Opponent choose scissors. You won."
    }
    // Paper
    else if(opponentChoice == 'rock' && action == "paper") {
        player1Score += 1;
        winnerText.innerText = "You choose paper. Opponent choose rock. You won."
    }
    else if(opponentChoice == 'paper' && action == "paper") {
        winnerText.innerText = "You choose paper. Opponent choose paper. It's a tie."
    }
    else if(opponentChoice == 'scissors' && action == "paper") {
        player2Score += 1;
        winnerText.innerText = "You choose paper. Opponent choose scissors. Opponent won."
    }
    
    // Scissors
    else if(opponentChoice == 'rock' && action == "scissors") {
        player2Score += 1;
        winnerText.innerText = "You choose scissors. Opponent choose rock. Opponent won."
    }
    else if(opponentChoice == 'paper' && action == "scissors") {
        player1Score += 1;
        winnerText.innerText = "You choose scissors. Opponent choose paper. You won."
    }
    else if(opponentChoice == 'scissors' && action == "scissors") {
        winnerText.innerText = "You choose scissors. Opponent choose scissors. It's a tie."
    }
}

// Update scores of players
const updateScore = () => {
    player1ScoreText.innerText = player1Score;
    player2ScoreText.innerText = player2Score;
    if(player1Score == 5) {
        const userChoice = confirm("You have won");
        checkUserChoice(userChoice);
    }
    else if(player2Score == 5) {
        const userChoice = confirm("Opponent won");
        checkUserChoice(userChoice);
    }
}

const checkUserChoice = (action) => {
    if(action == true) {
        resetScore();
        winnerText.innerText = "No action has been selected yet."
    }
    else {
        winnerText.hidden = true;
        rockButton.hidden = true;
        scissorsButton.hidden = true;
        paperButton.hidden = true;
        instructions.hidden = true;
        startButton.hidden = false;
        resetScore();        
    }
}

const resetScore = () => {
    player1Score = 0;
    player2Score = 0;
    player1ScoreText.innerText = player1Score;
    player2ScoreText.innerText = player2Score;
}

// Button actions
rockButton.addEventListener('click', () => {
    compareChoice('rock');
    updateScore();
})

paperButton.addEventListener('click', () => {
    compareChoice('paper');
    updateScore();
})

scissorsButton.addEventListener('click', () => {
    compareChoice('scissors');
    updateScore();
})

