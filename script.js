let computerScore, playerScore;
computerScore = playerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
  });
    
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

function checkWinner() {
    if(playerScore === 5 || computerScore === 5)
    {
        const paraWinner = document.querySelector('#winner');
        const winner = (playerScore > computerScore) ? 'Player' : 'Computer';
        paraWinner.textContent = "The winner of the match is: The " + winner;
        playerScore = computerScore = 0;

        const paraPlayerScore = document.querySelector('#playerScoreMatch');
        paraPlayerScore.textContent = 0;
        const paraComputerScore = document.querySelector('#computerScoreMatch');
        paraComputerScore.textContent = 0;

        paraWinner.style.color = 'rgb(255, 208, 0)';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    const paraWinner = document.querySelector('#winner');
    paraWinner.style.color = 'white';

    let result;

    if(playerSelection === computerSelection){
        const paraWinner = document.querySelector('#winner');
        paraWinner.textContent = "Tie: " + playerSelection + " VS " + computerSelection; 
    } else if
    (  playerSelection === "ROCK" && computerSelection === "SCISSORS" 
    || playerSelection === "PAPER" && computerSelection === "ROCK"
    || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        const paraWinner = document.querySelector('#winner');
        paraWinner.textContent = "Player won the round!";
        const paraPlayerScore = document.querySelector('#playerScoreMatch');
        paraPlayerScore.textContent = ++playerScore;
    }else {
        const paraWinner = document.querySelector('#winner');
        paraWinner.textContent = "Computer won the round!";
        const paraComputerScore = document.querySelector('#computerScoreMatch');
        paraComputerScore.textContent = ++computerScore;
    }
        checkWinner();
}