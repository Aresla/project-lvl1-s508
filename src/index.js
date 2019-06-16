import readlineSync from 'readline-sync';
import { getGameExplanation } from "./helpers/getGameExplanation";
import { getTask } from "./helpers/getTask";
import { checkIfGameOver } from "./helpers/checkIfGameOver";
import { getAfterGameMessage } from "./helpers/getAfterGameMessage";
import { getNewCorrectAnswersCount } from "./helpers/getNewCorrectAnswersCount";
import { getUserName } from "./helpers/getUserName";
import { getConclusionMessage } from "./helpers/getConclusionMessage";
import { car, cdr } from "hexlet-pairs";

// gameName:
//   even
//   calc
//   gcd

const welcomeMessage = 'Welcome to the Brain Games!';

export const gameEngine = (gameName) => {
  console.log(welcomeMessage);
  const gameExplanation = getGameExplanation(gameName);
  console.log(gameExplanation);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let isGameOver = false;
  let correctAnswersCount = 0;
  while (!isGameOver) {
    const task = getTask(gameName);
    const question = car(task);
    const rightAnswer = cdr(task);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer?');
    const conclusionMessage = getConclusionMessage(userName, userAnswer, rightAnswer);
    console.log(conclusionMessage);
    const isUserAnswerCorrect = userAnswer === rightAnswer;
    correctAnswersCount = getNewCorrectAnswersCount(correctAnswersCount, isUserAnswerCorrect);
    isGameOver = checkIfGameOver(gameName, isUserAnswerCorrect, correctAnswersCount);
  }

  const afterGameMessage = getAfterGameMessage(userName, correctAnswersCount);
  console.log(afterGameMessage);
};

