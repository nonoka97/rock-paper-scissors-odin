let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let RandomItem;
    const items = ["rock","paper","scissors"];
    RandomItem = Math.floor(Math.random() * items.length);
    return items[RandomItem];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins, paper beats rock!";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins, rock beats scissors!";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins, scissors beats paper!";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins, rock beats scissors!";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins, paper beats rock!";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins, scissors beats paper!";
    }
    else {
        return "Choose between rock, paper, or scissors!"
    }
}

function displayScore() {
    const scoreElement = document.getElementById('score-container');
    scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll('.choice-btn');
const resultContainer = document.getElementById('result-container');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const playerSelection = button.textContent.toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        resultContainer.innerHTML = "Player chose: " + playerSelection +
                                    "<br>Computer chose: " + computerSelection +
                                    "<br>Result: " + result;

        // Update the score based on the result
        if (result.includes('Player wins')) {
            playerScore++;
        } else if (result.includes('Computer wins')) {
            computerScore++;
        }

        displayScore();

        // Check for the winner of the game
        if (playerScore === 5 || computerScore === 5) {
            const winnerMessage = playerScore === 5 ? "Player wins the game!" : "Computer wins the game!";
            resultContainer.innerHTML += `<br><strong>${winnerMessage}</strong>`;
            // Disable the buttons to prevent further play after the game is won
            buttons.forEach(button => {
                button.removeEventListener('click', function() {});
                button.disabled = true;
            });
        }
    });
});
