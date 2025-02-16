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

let computerResult = getComputerChoice();

function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock/paper/scissors): ");

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        console.log("Enter a valid choice");
    }

    return userChoice;
}

let userResult = getHumanChoice();

console.log("You entered " + userResult);


