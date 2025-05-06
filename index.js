let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissor'];

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Update displays
    document.getElementById('playerDisplay').textContent = `Player: ${getEmoji(playerChoice)}`;
    document.getElementById('computerDisplay').textContent = `Computer: ${getEmoji(computerChoice)}`;
    
    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a DRAW!";
        document.getElementById('resultDisplay').className = 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = "You WIN!";
        playerScore++;
        document.getElementById('resultDisplay').className = 'win';
    } else {
        result = "You LOSE!";
        computerScore++;
        document.getElementById('resultDisplay').className = 'lose';
    }
    
    // Update result and scores
    document.getElementById('resultDisplay').textContent = result;
    document.getElementById('playerScoreDisplay').textContent = playerScore;
    document.getElementById('computerScoreDisplay').textContent = computerScore;
}

function getEmoji(choice) {
    switch(choice) {
        case 'rock': return '👊';
        case 'paper': return '✋';
        case 'scissor': return '✌️';
        default: return '';
    }
}

// Add keyboard controls
document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case 'r':
            playGame('rock');
            break;
        case 'p':
            playGame('paper');
            break;
        case 's':
            playGame('scissor');
            break;
    }
});
// Add button controls
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScoreDisplay').textContent = '0';
    document.getElementById('computerScoreDisplay').textContent = '0';
    document.getElementById('playerDisplay').textContent = 'Player: ';
    document.getElementById('computerDisplay').textContent = 'Computer: ';
    document.getElementById('resultDisplay').textContent = '';
    document.getElementById('resultDisplay').className = '';
});