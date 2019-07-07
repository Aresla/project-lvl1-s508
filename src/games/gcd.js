import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';


const findGcd = (num1, num2) => {
  let numOne = num1;
  let numTwo = num2;
  while (numOne !== 0 && numTwo !== 0) {
    if (numOne > numTwo) {
      numOne %= numTwo;
    } else {
      numTwo %= numOne;
    }
  }
  return numOne > numTwo ? numOne : numTwo;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const a = getInteger(1, 10);
  const b = getInteger(1, 10);
  const question = `${a} ${b}`;
  const rightAnswer = findGcd(a, b).toString();
  return cons(question, rightAnswer);
};

const startGame = () => {
  gameEngine(gameDescription, getTask);
};

export default startGame;
