let choiceChecker = Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {

    if(choiceChecker <= 33) {
        return 'rock';
    } else if(choiceChecker >= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(playerSelection, computerSelection) {
    // your code here!
    if((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')){
        return 'You Lose!!! Paper beats rock';
    } else if((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')){
        return 'You Lose!!! Scissors beat paper';
    } else if((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')){
        return 'You Lose!!! Rock beats scissors';
    } else if((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')){
        return 'You Won!!! Rock beats scissors';
    } else if((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')){
        return 'You Won!!! Paper beats rock';
    } else if((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')){
        return 'You Won!!! Scissors beat paper';
    } else if((playerSelection.toLowerCase() === computerSelection)){
        return 'It\'s draw!!!';
    } else {
        return 'Choose between rock, paper, and scissors';
    }
  };
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));