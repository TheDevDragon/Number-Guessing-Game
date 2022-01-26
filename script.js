let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, secret) => {
    let user1 = Math.abs(userGuess - secret)
    let comp1 = Math.abs(comp1 - secret)
    if (userGuess >= 9 || userGuess < 0) {
        return 'Please pick a number between 0 and 9!'
    }

    if ()
}

const updateScore = winner => {

}