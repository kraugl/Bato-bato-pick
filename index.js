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

