import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';
import getUserName from './helpers/getUserName';

const welcomeMessage = 'Welcome to the Brain Games!';


export const buildGamePackage = (gameDescription, gameFunction) => cons(gameDescription, gameFunction);
const getGameDescription = gamePackage => car(gamePackage);
const getTaskGenerationFunction = gamePackage => cdr(gamePackage);

export const buildTask = (question, rightAnswer) => cons(question, rightAnswer);
const getQuestion = task => car(task);
const getRightAnswer = task => cdr(task);



export const gameEngine = (gamePackage) => {
  console.log(welcomeMessage);
  const gameDescription = getGameDescription(gamePackage);
  const taskGenerationFunction = getTaskGenerationFunction(gamePackage);
  console.log(`${gameDescription}`);
  const userName = getUserName();
  let task;
  let question;
  let rightAnswer;
  let userAnswer;
  let i = 0;
  while (i < 3) {
    task = taskGenerationFunction();
    question = getQuestion(task);
    rightAnswer = getRightAnswer(task);
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer?');
    const isUserAnswerCorrect = userAnswer === rightAnswer;
    if (!isUserAnswerCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations ${userName}!`);
      break;
    }
    console.log('Correct!');
    i += 1;
  }
};



/*const gameEngine = (gameName) => {
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
};*/

export default gameEngine;
