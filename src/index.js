import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

const welcomeMessage = 'Welcome to the Brain Games!';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  return userName;
};

export const buildGamePackage = (gameDescription, gameFunction) => {
  cons(gameDescription, gameFunction);
};

const getGameDescription = gamePackage => car(gamePackage);
const getTaskGenerationFunction = gamePackage => cdr(gamePackage);

export const buildTask = (question, rightAnswer) => cons(question, rightAnswer);
const getQuestion = task => car(task);
const getRightAnswer = task => cdr(task);


const gameEngine = (gamePackage) => {
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
    const userAnswerCorrect = userAnswer === rightAnswer;
    if (!userAnswerCorrect) {
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

export default gameEngine;
