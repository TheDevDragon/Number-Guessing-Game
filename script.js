let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

// Compares the number that human and computer inputs and determines which number is closer to the target number
const compareGuesses = (humanGuess, computerGuess, secret) => {
    let user1 = Math.abs(secret - humanGuess)
    let comp1 = Math.abs(secret - computerGuess)

    if (humanGuess > 9 || humanGuess < 0) {
        alert('Please enter a number between 0 and 9');
    }

    if (user1 <= comp1) {
        return true
    } else {
        return false
    }
}

// Updates the score by 1 to the winner
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Advances the round by 1
const advanceRound = () => {
    currentRoundNumber++;
}
