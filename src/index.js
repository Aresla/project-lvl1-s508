import readlineSync from 'readline-sync';
import { generateWholeNum } from './helpers/generate-whole-num';

// eslint-disable-next-line import/prefer-default-export

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const greeting = () => {
  console.log('Welcome to the Brain Games! Answer "yes" if number even otherwise answer "no".');
};

const checkParity = questionNum => (questionNum % 2 === 0) ? 'yes' : 'no';

const replyUser = (questionNum, answer, userName) => answer === checkParity(questionNum)
  ? 'Correct!'
  : `${answer} is wrong answer ;(. Correct answer was ${checkParity(questionNum)}. Let's try again, ${userName}!`;

const game = (userName) => {
  const questionNum = generateWholeNum();
  console.log(questionNum);
  const answer = readlineSync.question('Your answer?');
  console.log(replyUser(questionNum, answer, userName));
  const isAnswerCorrect = checkParity(questionNum) === answer;
  return isAnswerCorrect;
};

const myGame = () => {
  greeting();
  const userName = getUserName();

  let numberOfCorrectAnswers = 0;

  while (numberOfCorrectAnswers < 3) {
    numberOfCorrectAnswers = game(userName) ? numberOfCorrectAnswers + 1 : 0;
  }
  console.log(`Congratulations, ${userName}!`);
};


export default myGame;
