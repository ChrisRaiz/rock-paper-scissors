const game = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let randomComputerChoice = game[Math.floor(Math.random() * game.length)];
    return randomComputerChoice;
}

let computerChoice = getComputerChoice();

console.log(computerChoice);



