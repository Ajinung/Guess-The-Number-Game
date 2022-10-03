import os from "os";
import Prompt from "prompt-sync";

const prompt = Prompt();
//to check system model.. mine is core i5
const check = parseInt(
  os.cpus()[2].model.split(" ")[2].split("-")[0].split("")[1]
);
//to check the system memory space
const totalMemory = Math.floor(os.totalmem() / 1000000000);

//condition to check before game is played
if (check >= 5 && totalMemory >= 4) {
  console.log("your system can play this game.");
  console.log("");

  //guess the number game
  while (true) {
    const Num: number = Math.floor(Math.random() * 20);

    //loop to play game for 3 time: 3 lives
    for (let i = 0; i < 3; i++) {
      const guessNumber = parseInt(prompt("Guess The nummber On My Mind 😊: "));
      console.log("");

      if (Num === guessNumber) {
        console.log("You guessed right. You Won! 👍🏽");
        break;
      } else {
        //hint
        if (guessNumber < Num) {
          console.log(
            `Hint: ${guessNumber} is lesser than the number i'm thinking 😉`
          );
        } else if (guessNumber > Num) {
          console.log(
            `Hint: ${guessNumber} is greater than the number i'm thinking 😉`
          );
        }
      }
      continue;
    }
    //Try again
    const tryAgain = prompt(
      "press Y to Play again or N to quit game: "
    ).toUpperCase();
    if (tryAgain === "Y") {
      continue;
    } else if (tryAgain === "N") {
      break;
    }
  }
  console.log("Game Over!");

  //condition if return false
} else {
  console.log(
    "Your system does not meet the requirement to play this Game 💔.".toUpperCase()
  );
}
