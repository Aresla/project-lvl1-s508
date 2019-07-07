import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcomeMessage = 'Welcome to the Brain Games!';

const maxRoundCount = 3;

const gameEngine = (gameDescription, getTask) => {
  console.log(welcomeMessage);
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name?');

  for (let i = 0; i < maxRoundCount; i += 1) {
    const task = getTask();
    const question = car(task);
    const rightAnswer = cdr(task);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer?');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${userName}!`);
};

export default gameEngine;
