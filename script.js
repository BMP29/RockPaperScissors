let computerCount, playerCount;
computerCount = playerCount = 0;

let computerScore, playerScore;
computerScore = playerScore = 0;

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
        return "Tie";
    } else if
    (  playerSelection === "ROCK" && computerSelection === "SCISSORS" 
    || playerSelection === "PAPER" && computerSelection === "ROCK"
    || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "Player";
    }else {
        return "Computer";
    }
}

function game(choice) {
    let winner = playRound(choice, getComputerChoice());
    console.log(winner);

    if (winner != "Tie") winner === "Player" ? playerCount++ : computerCount++;

    if(winner === "Player") {
        document.getElementById("winner").innerHTML = "You Won the round!";
    } else if(winner === "Computer") {
        document.getElementById("winner").innerHTML = "Computer Won the round!";
    }


    console.log("Computer: " + computerCount + " You: " + playerCount);

    if(playerCount === 5) 
    {
        alert("You Won!");
        computerCount = playerCount = 0;
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore.toString();
    }else if (computerCount === 5){
        alert("Computer Won! You Losed!");
        computerCount = playerCount = 0;
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore.toString();
    } 
}