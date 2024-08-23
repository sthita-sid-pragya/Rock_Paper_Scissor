console.log("Welcome to Rock-Paper-Scissors!");

let humanScore = 0, computerScore = 0;
let humanChoice;
let computerChoice;

function getRandomIntInclusive(min = 1, max = 3)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

}

function getComputerChoice()
{
    let one = "rock";
    let two = "paper";
    let three = "scissor";

    const computerChoice = getRandomIntInclusive();

    if(computerChoice === 1)
        return one;
    else if(computerChoice === 2)
        return two;
    else if(computerChoice === 3)
        return three;

}

function getHumanChoice()
{
    let choiceHuman = prompt("Rock, paper, or Scissors?");
    return choiceHuman;
}

function playRound(humanChoice, computerChoice)
{
    // Making the humanChoice caseInsensitive to later compare
    humanChoice = humanChoice.toLowerCase();
    

    if(humanChoice == "paper" && computerChoice == "scissor")
    {
        computerScore;
        console.log("You lose! Scissor beats Rock");
    }
    else if(humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        console.log("You win! Paper beats Rock");
    }
    else if(humanChoice == "paper" && computerChoice == "paper")
    {
        humanScore--;
        computerScore--;
        console.log("Draw");
    }

    else if(humanChoice == "rock" && computerChoice == "scissor")
    {
        humanScore++;
        console.log("You win! Rock beats Scissor");
    }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        computerChoice++;
        console.log("You lose! Paper beats Rock");
    }
    else if(humanChoice == "rock" && computerChoice == "rock")
    {
        humanScore--;
        computerScore--;
        console.log("Draw");
    }

    else if(humanChoice == "scissor" && computerChoice == "rock")
    {
        computerScore++;
        console.log("You lose! Rock beats Scissor");
    }
    else if(humanChoice == "scissor" && computerChoice == "paper")
    {
        humanScore++;
        console.log("You win! Scissor beats Paper");
    }
    else if(humanChoice == "scissor" && computerChoice == "scissor")
    {
        humanScore--;
        computerScore--;
        console.log("Draw");
    }
 
}

function playGame()
{
    let i = 0;
    while(i != 5)
    {
        i++;
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    calculate_score();
    
}

function calculate_score()
{
    if(humanScore < computerScore)
    {
        alert("You lost");
    }
    else if(humanScore > computerScore)
    {
        alert("You won");
    }
    else
        alert("Draw");
}


playGame();