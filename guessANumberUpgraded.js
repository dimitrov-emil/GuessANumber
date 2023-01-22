function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let counter = 0;

    let recursiveAsincReadLine = function () {
        readline.question('Guess a number from 1 to 100: ', number => {
            guess = Number(number);

            counter++;

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log(`You nailed it!`);
                    return readline.close();
                } else if (guess <= computerGuess) {
                    console.log(`Nah, it's a bit low!`);

                    if (guess !== computerGuess && counter == 7) {
                        console.log(`Game over! Better luck next time!`);
                        return readline.close();
                    }

                    recursiveAsincReadLine();
                } else if (guess >= computerGuess) {
                    console.log(`Wow! Too high!`);

                    if (guess !== computerGuess && counter > 5) {
                        console.log(`Game over! Better luck next time!`);
                        return readline.close();
                    }

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