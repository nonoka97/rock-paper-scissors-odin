function getComputerChoice() {
    let RandomItem;
    const items = ["rock","paper","scissors"];
    RandomItem = Math.floor(Math.random() * items.length);
    return items[RandomItem];
}


function RockPaperScissors(playerSelection, computerSelection) {



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

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        let computerSelection = getComputerChoice();

        // Validate playerSelection input
        if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            console.log("Invalid choice! Please choose between rock, paper, or scissors.");
            continue;
        }

        console.log("Round " + (i + 1) + ":");
        console.log("Player guessed: " + playerSelection);
        console.log("Computer guessed: " + computerSelection);

        const result = RockPaperScissors(playerSelection, computerSelection);

        // Count points and display round result
        if (result.includes("Player wins")) {
            playerPoints++;
            console.log(result);
        } else if (result.includes("Computer wins")) {
            computerPoints++;
            console.log(result);
        } else {
            console.log(result);
        }

        console.log("Current Score - Player: " + playerPoints + ", Computer: " + computerPoints);
        console.log("----------------------------------------");
    }

    // Determine the winner after 5 rounds
    if (playerPoints > computerPoints) {
        console.log("Player wins the game!");
    } else if (playerPoints < computerPoints) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! No clear winner.");
    }
}

// Call the game function to start playing
game();

