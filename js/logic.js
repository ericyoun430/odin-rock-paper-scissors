function getComputerChoice() {
    let randInt = Math.random();

    let computerChoce = (randInt <= .33) ? "rock" : (
                        (randInt <= .66) ? "scissors" : "paper")
    return computerChoce;
}

let playGame = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toLowerCase();

    let out;

    switch (true) {
        case (playerSelection == "rock" && computerSelection == "rock"):
            out = `You tied!`;
            break;
        
        case (playerSelection == "rock" && computerSelection == "paper"):
            out = `You lost! ${playerSelection} loses to ${computerSelection}`;
            break;
        
        case (playerSelection == "rock" && computerSelection == "scissors"):
            out = `You won! ${playerSelection} wins against ${computerSelection}`;
            break;
        
        case (playerSelection == "paper" && computerSelection == "rock"):
            out = `You won! ${playerSelection} wins against ${computerSelection}`;
            break;
        
        case (playerSelection == "paper" && computerSelection == "paper"):
            out = `You tied!`;
            break;
        
        case (playerSelection == "paper" && computerSelection == "scissors"):
            out = `You lost! ${playerSelection} loses to ${computerSelection}`;
            break;
        
        case (playerSelection == "scissors" && computerSelection == "rock"):
            out = `You lost! ${playerSelection} loses to ${computerSelection}`;
            break;
        case (playerSelection == "scissors" && computerSelection == "paper"):
            out = `You won! ${playerSelection} wins against ${computerSelection}`;
            break;
        
        case (playerSelection == "scissors" && computerSelection == "scissors"):
            out = `You tied!`;
            break;
    }
    return out;
}


function game(userInput) {
    let computerChoice = getComputerChoice();
    let gameOutput = playGame(userInput,computerChoice);
    return gameOutput;
}


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let outcomeDiv = document.querySelector('#outcome');
let winCountDiv = document.querySelector('#winCount');

let winCount = 0;
let lossCount = 0;

let moves = [rock,paper,scissors];

for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    move.addEventListener('click',() => {

        let outcome = (i === 0) ? game('rock') : (i === 1) ? 
            game('paper') : game('scissors');

        if (outcome.substring(0,7) === 'You won') {
            winCount++;
        } else if (outcome.substring(0,7) ==='You los') {
            lossCount++;
        }
        outcomeDiv.textContent = "Outcome: " + outcome;
        winCountDiv.textContent = "Current Score: " + winCount + "-" + lossCount;
    
        if (winCount >= 5 && document.querySelector('#add') === null) {
            let winDiv = document.createElement('div');
            winDiv.textContent = "You won the overall game";
            winDiv.setAttribute('id','add');
            document.querySelector('body').appendChild(winDiv);
        }
        
        if (lossCount >= 5 && document.querySelector('#add') === null) {
            let lossDiv = document.createElement('div');
            lossDiv.textContent = "You lost the overall game";
            lossDiv.setAttribute('id','add');
            document.querySelector('body').appendChild(lossDiv);
        }
    });
};