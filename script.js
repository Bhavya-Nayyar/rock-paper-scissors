function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    let computerChoice;

    if (num == 1) {
        computerChoice = "rock";
    } else if (num == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock/paper/scissors): ");

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        console.log("Enter a valid choice");
    }

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Tie! Both are Rock.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");

        computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");

        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");

        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Tie! Both are Paper.");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");

        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");

        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");

        humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Tie! Both are Scissors.");
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let userSelection = getHumanChoice();
        playRound(userSelection, computerSelection);
    }

    if (humanScore >= 3) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

playGame();