function getComputerChoice() {
    let min = 1;
    let max = 4;

    let tool = Math.floor(Math.random() * (max - min) ) + min;

    switch (tool) {
        case 1:
            return 'ROCK';
        break;

        case 2:
            return 'SCISSORS'
            break;

        case 3:
            return 'PAPER';
        break;

        default:
            console.log("ERROR: computer couldn't choose a tool!");
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection === computerSelection){
        console.log(computerSelection);
        return "Tie";
    } else if
    (  playerSelection === "ROCK" && computerSelection === "SCISSORS" 
    || playerSelection === "PAPER" && computerSelection === "ROCK"
    || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "Player wins!";
    }else {
        console.log(computerSelection);
        return "Computer wins!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));