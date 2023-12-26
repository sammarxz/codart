export const initialCode = `function guessMyNumber() {
  const userGuess = prompt("Guess a number between 1 and 10:");
  const secretNumber = Math.ceil(Math.random() * 10);

  if (parseInt(userGuess) === secretNumber) {
    return "Wow, you must be a psychic!";
  } else {
    return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
  }
}

console.log(guessMyNumber());`;