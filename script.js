let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a random target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

/* This function compares the number choose from the human and computer
   as well as which guess was closer to the secret target number
*/
const compareGuesses = (userGuess, computerGuess, secret) => {
    let user1 = Math.abs(userGuess - secret)
    let comp1 = Math.abs(comp1 - secret)
    if (userGuess >= 9 || userGuess < 0) {
        return 'Please pick a number between 0 and 9!'
    }

    if (user1 < comp1 || user1 === comp1) {
        return true;
    } else if (comp1 < user1) {
        return false;
    }
}

// This updateScore function updates the score based on whether the human or computer wins
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore +1;
}

// Advances the round Number    
const advanceRound = () => {
    currentRoundNumber += 1;
}
