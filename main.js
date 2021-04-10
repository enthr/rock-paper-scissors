
let options = ['ROCK', 'PAPER', 'SCISSORS'];

let length = options.length;

function computerPlay() {
    return options[Math.floor(Math.random() * length)];
}

let playerSelection;

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter Rock or Paper or Scissors:");

    playerSelection = playerSelection.toUpperCase();

    if(playerSelection == 'ROCK')
    {
        if(computerSelection == 'ROCK')
        {
            return "DRAW cannot beat rock";
        }
        else if(computerSelection == 'PAPER')
        {
            return "You LOSE paper beat rock";
        }
        else
        {
            return "You Win rock beat scissors";
        }
    }
    else if(playerSelection == 'PAPER')
    {
        if(computerSelection == 'ROCK')
        {
            return "YOU WIN paper beats rock";
        }
        else if(computerSelection == 'PAPER')
        {
            return "DRAW paper cannot beat paper";
        }
        else
        {
            return "YOU LOSE cut By Scissors";
        }
    }
    else if(playerSelection == 'SCISSORS')
    {
        if(computerSelection == 'ROCK')
        {
            return "You LOSE Rock beats Scissors";
        }
        else if(computerSelection == 'PAPER')
        {
            return "You WIN scissors beats paper";
        }
        else
        {
            return "Draw scissors cannot beat scissors";
        }
    }
}

let playerScore = 0, computerScore = 0, a;

function game() {
    
    for(let i = 0; i < 5; i++)
    {
        a = playRound(playerSelection, computerSelection);

        console.log(a);

        if(a == 'You Win rock beat scissors' || a == 'YOU WIN paper beats rock' || a == 'You WIN scissors beats paper')
        {
            playerScore = playerScore + 1;
        }
        else if(a == 'You LOSE paper beat rock' || a == 'YOU LOSE cut By Scissors' || a == 'You LOSE Rock beats Scissors')
        {
            computerScore = computerScore + 1;
        }
        else{
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        }
        
    }
    
}

console.log(game());


if(playerScore > computerScore)
{
    console.log('You WIN');
}
else if(playerScore == computerScore)
{
    console.log('DRAW');
}
else
{
    console.log('You LOSE');
}