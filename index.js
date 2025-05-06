// Game variables
let playerScore = 0;
let computerScore = 0;
const sassyResults = [
    "Boom! Headshot!",
    "Get rekt!",
    "Eat that!",
    "Too easy!",
    "Git gud!",
    "Pwned!",
    "Sit down!",
    "Wrecked!",
    "Noob!",
    "GG EZ!"
];

// Game logic
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Update displays
    document.getElementById('playerDisplay').textContent = `Player: ${getEmoji(playerChoice)}`;
    document.getElementById('computerDisplay').textContent = `Computer: ${getEmoji(computerChoice)}`;
    
    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = sassyResults[Math.floor(Math.random() * sassyResults.length)];
        playerScore++;
    } else {
        result = "Computer wins! LMAO!";
        computerScore++;
    }
    
    // Update result and scores
    document.getElementById('resultDisplay').textContent = result;
    document.getElementById('playerScoreDisplay').textContent = playerScore;
    document.getElementById('computerScoreDisplay').textContent = computerScore;
    
    // Add animation
    const resultElement = document.getElementById('resultDisplay');
    resultElement.style.animation = 'none';
    void resultElement
}