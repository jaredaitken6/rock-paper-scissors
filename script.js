let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random().toFixed(2);

    if (randomNum <= 0.33) {
        return "rock";
    } else if (randomNum > 0.33 && randomNum <= 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    return prompt("rock, paper or scissor?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let score = "human: " + humanScore + " computer: " + computerScore;

    console.log(computerChoice);
    if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1;
        score = "human: " + humanScore + " computer: " + computerScore;

        switch (computerChoice) {
            case "rock":
                return "You lose! Rock beats scissor. " + score;
                break;
            case "paper":
                return "You lose! Paper beats rock. " + score; 
                break;
            case "scissor":
                return "You lose! Scissor beats paper. " + score; 
                break;
            }

    } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper") {

        humanScore += 1;
        score = "human: " + humanScore + " computer: " + computerScore;

        switch (humanChoice) {
            case "rock":
                return "Rock beats scissor. " + score;
                break;
            case "paper":
                return "paper beats rock. " + score; 
                break;
            case "scissor":
                return "scissor beats paper. " + score; 
                break;
            }

    } else {
        return "tie. " + score;
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
}

playGame();
    