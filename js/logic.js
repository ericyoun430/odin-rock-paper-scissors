


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


function game() {

    let winCount = 0;

    for (let i = 0; i < 5; i++) {
        let userInput = prompt('What do you choose to do?','')
        let computerChoice = getComputerChoice();
        let gameOutput = playGame(userInput,computerChoice);
        if (gameOutput.substring(0,7) == "You won") {
            winCount++;
        }
    }

    console.log(winCount);

    let won = (winCount > 2) ? true : false;

    return won;
}