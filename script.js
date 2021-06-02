
/**
 * Function that generates random move
 * @returns  {String}   Computers move
 */
const computerPlay = () => {
  moves = ["Rock", "Paper", "Scissors"];
  const move = moves[Math.floor(Math.random() * 3)];
  console.log(move);
  return move;
};


/**
 * Function that determines winner of round
 * @param    {String}       playerSelection
 * @param    {String}     computerSelection
 * @returns  {String}   Declares winner/tie
 */
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "scissors") {
      return true;
    } else if (computerSelection.toLowerCase() === "paper") {
      return false;
    } else {
      return null;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "rock") {
      return true;
    } else if (computerSelection.toLowerCase() === "scissors") {
      return false;
    } else {
      return null;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection.toLowerCase() === "paper") {
      return true;
    } else if (computerSelection.toLowerCase() === "rock") {
      return false;
    } else {
      return null;
    }
  }
};

/**
 * Function that plays five rounds of game
 * @prompts             User to input move
 * @alerts                   Round, scores
 * @prints        If user won or lost game
 */
const game = () => {
    let userScore = 0;
    let computerScore = 0;
    let round = 1;
    let userMove;

    while(round <= 5) {
        userMove = prompt(`Round ${round}\nYour score: ${userScore}\nComputer Score: ${computerScore}\nPlease input move (rock/paper/scissors): `);
        let play = playRound(userMove, computerPlay());
        if (play) { 
            userScore++;
            alert('You win!');
        }
        else if (play === false) { 
            computerScore++;
            alert('You lose!'); 
        }
        else { 
            alert('Tie!'); 
        }

        round++;
    }
    alert(userScore > computerScore ? `You win the game! ${userScore}-${computerScore}`
        : userScore < computerScore ? `You lose the game! ${userScore}-${computerScore}` 
        : `Tie Game! ${userScore}-${computerScore}`);
}

console.log(game());