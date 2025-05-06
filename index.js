
const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice) {
        result = "It's a draw!";
    }else{
        if(playerChoice === "rock" && computerChoice === "scissors"){
            result = "You win!";
        }else if(playerChoice === "paper" && computerChoice === "rock"){
            result = "You win!";
        }else if(playerChoice === "scissors" && computerChoice === "paper"){
            result = "You win!";
        }else{
            result = "You lose!";
        }
    }
    
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result) {
        case "You win!":
            resultDisplay.style.color = "green";
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            break;
        case "You lose!":
            resultDisplay.style.color = "red";
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            break;
        default:
            resultDisplay.style.color = "black";
    }
}