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