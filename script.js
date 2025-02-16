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

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoiceNew = humanChoice.toLowerCase();

    if (humanChoiceNew == "rock" && computerChoice == "rock") {
        console.log("Tie! Both are Rock.");
    } else if (humanChoiceNew == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");

        computerScore += 1;
    } else if (humanChoiceNew == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");

        humanScore += 1;
    } else if (humanChoiceNew == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");

        humanScore += 1;
    } else if (humanChoiceNew == "paper" && computerChoice == "paper") {
        console.log("Tie! Both are Paper.");
    } else if (humanChoiceNew == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");

        computerScore += 1;
    } else if (humanChoiceNew == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");

        computerScore += 1;
    } else if (humanChoiceNew == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");

        humanScore += 1;
    } else if (humanChoiceNew == "scissors" && computerChoice == "scissors") {
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