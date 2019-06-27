import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

const welcomeMessage = 'Welcome to the Brain Games!';

export const buildGamePackage = (description, fn) => cons(description, fn);
const getGameDescription = gamePackage => car(gamePackage);
const getTaskGenerator = gamePackage => cdr(gamePackage);

export const buildTask = (question, rightAnswer) => cons(question, rightAnswer);
const getQuestion = task => car(task);
const getRightAnswer = task => cdr(task);

const maxNumberOfRounds = 3;


const gameEngine = (gamePackage) => {
  console.log(welcomeMessage);
  const gameDescription = getGameDescription(gamePackage);
  const taskGenerator = getTaskGenerator(gamePackage);
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name?');
  let task;
  let question;
  let rightAnswer;
  let userAnswer;

  for (let i = 0; i < maxNumberOfRounds; i += 1) {
    task = taskGenerator();
    question = getQuestion(task);
    rightAnswer = getRightAnswer(task);
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer?');
    const userAnswerCorrect = userAnswer === rightAnswer;
    if (!userAnswerCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
};

export default gameEngine;
