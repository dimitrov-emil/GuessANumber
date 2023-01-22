function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsincReadLine = function () {
        readline.question('Guess a number from 1 to 100: ', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log(`You nailed it!`);
                    return readline.close();
                } else if (guess <= computerGuess) {
                    console.log(`Nah, it's a bit low!`);
                    recursiveAsincReadLine();
                } else if (guess >= computerGuess) {
                    console.log(`Wow! Too high!`);
                    recursiveAsincReadLine();
                } 
            } else {
                    console.log("What was that?! Try again...");
                    recursiveAsincReadLine();
                }
            });
    }
    recursiveAsincReadLine();
}
guessANumber()