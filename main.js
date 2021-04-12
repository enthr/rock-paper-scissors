// 1 = Rock, 2 = Paper, 3 = Scissors
let btn = document.querySelectorAll('button');
let score = document.querySelector('.score');



let options = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}


let computerSelection = computerPlay();

function playRound(playerSelection) {

    if(playerSelection == 1)
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
    else if(playerSelection == 2)
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
    else if(playerSelection == 3)
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

btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        console.log(playRound(button.id)); 
    });
});



// if(playerScore > computerScore)
// {
//     console.log('You WIN');
// }
// else if(playerScore == computerScore)
// {
//     console.log('DRAW');
// }
// else
// {
//     console.log('You LOSE');
// }