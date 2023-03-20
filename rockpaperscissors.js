//global variables
let userPrompt;
let user = 0;
let computer = 0;

//Computer Randomized Selection Function
function computerSelection(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomComputerChoice;
}

//Deciding a winner/loser Function
function playRound(){
    let userPrompt = prompt('Rock, Paper, or Scissors');
    if (userPrompt === ""){
        console.log('Enter either Rock Paper or Scissors');
        playRound();
    }
    let userChoice = userPrompt.toLowerCase();
    // Makes sure either rock, paper, or scissors was entered
    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
        console.log('Enter either Rock Paper or Scissors');
        playRound();
    }
    let computerChoice = computerSelection();
    if (userChoice == 'rock' && computerChoice == 'scissors'
     || userChoice == 'paper' && computerChoice == 'rock'
     || userChoice == 'scissors' && computerChoice == 'paper'){
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        console.log(`User is at ${user += 1} and Computer is at ${computer}` );
     }
    else if (userChoice == 'rock' && computerChoice == 'paper'
    || userChoice == 'paper' && computerChoice == 'scissors'
    || userChoice == 'scissors' && computerChoice == 'rock'){
        console.log(`You lost! ${computerChoice} beats ${userChoice}`);
        console.log(`User is at ${user} and Computer is at ${computer += 1}` );
    }
    else if (userChoice == computerChoice){
        console.log(`You both chose ${userChoice}, it's a draw`);
        console.log(`User is at ${user} and Computer is at ${computer}` );
    }
    return user, computer;
}

function game(){
    for (let i=0; i < 5; i++){
        playRound();
        if (i==4){
            if (user>computer){
                console.log('Game Over, The User wins!');
            }
            else if (user<computer){
                console.log('Game Over, The Computer wins!');
            }
            else {
                console.log('Game Over, It\'s a draw!');
            }
        }
    }
}