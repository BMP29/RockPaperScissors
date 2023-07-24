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

function game() {
    let computer, player;
    computer = player = 0;

    while (player < 5 && computer < 5) {
        let choice = prompt("Rock, Scissors or Paper?");
        let winner = playRound(choice, getComputerChoice());
        console.log(winner);

        if (winner != "Tie") winner === "Player" ? player++ : computer++;
    }

    console.log("Computer: " + computer + " You: " + player);
    if(player > computer) alert("You Won!");
    else alert("Computer Won! You Losed!");
}