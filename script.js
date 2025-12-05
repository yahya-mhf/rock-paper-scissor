const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const container = document.querySelector(".container");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    if (humanScore >= 5 || computerScore >= 5){return;}
    
    let result;

    if (humanChoice === computerChoice){
        result = `Tie, Both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `Human win this round, ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        result = `Computer win this round, ${computerChoice} beats ${humanChoice}`;
    }

    // add content to the container
    const divRoundWinner = document.createElement("div");
    const divScore = document.createElement("div");

    divRoundWinner.textContent = result;
    divScore.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;

    container.innerHTML = ""; // unsure the container updated and not written on top
    container.appendChild(divRoundWinner);
    container.appendChild(divScore);

    if (humanScore === 5 || computerScore === 5){
        const winner = humanScore === 5 ? "Human WIN" : "Computer WIN";
        const headerGameOver = document.createElement("h2");
        headerGameOver.textContent = winner;
        container.appendChild(headerGameOver);
    }
}

// Event Listeners
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorButton.addEventListener("click", () => playRound("scissor"));