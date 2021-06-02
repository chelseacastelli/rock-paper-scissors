/**
 * Function that generates random move
 * @return {String}     Computers move
 */
const computerPlay = () => {
  moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * 3)];
};

/**
 * Function that determines winner of round
 * @param   {String} playerSelection
 * @param   {String} computerSelection
 * @returns {String} Declares winner/tie
 */
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "paper") {
      return "You lose! Paper beats rock";
    } else if (computerSelection.toLowerCase() === "scissors") {
      return "You win! Rock beats scissors";
    } else {
      return "Tie!";
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "rock") {
      return "You win! Paper beats rock";
    } else if (computerSelection.toLowerCase() === "scissors") {
      return "You lose! Scissors beats paper";
    } else {
      return "Tie!";
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection.toLowerCase() === "rock") {
      return "You lose! Rock beats scissors";
    } else if (computerSelection.toLowerCase() === "paper") {
      return "You win! Scissors beats paper";
    } else {
      return "Tie!";
    }
  }
};

