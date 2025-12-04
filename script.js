let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let value = Math.floor(Math.random() * 3);
    if (value === 0){
        return "rock";
    }
    else if (value === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter Choice: ")
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("Tie");
    }
    else{
        // WIN
        const winCondition = (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock");
        if (winCondition){
            humanScore++;
            console.log(`You win ${humanChoice} beats ${computerChoice}`)
        }
        // LOSE
        else {
            computerScore++;
            console.log(`You Lose ${computerChoice} beats ${humanChoice}`)
        }
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice){
        console.log("Tie");
    }
    else{
        // WIN
        const winCondition = (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock");
        if (winCondition){
            humanScore++;
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
        }
        // LOSE
        else {
            computerScore++;
            console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
        }
    }
    console.log("------------------");
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("------------------");
}

function playGame (roundNbr){
    let i = 0;
    while (i < roundNbr){
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    } 
}

playGame(5);

