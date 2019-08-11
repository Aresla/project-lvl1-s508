
import playGame from '..';
import getRandomInteger from '../helpers/getRandomInteger';
import { cons } from 'hexlet-pairs';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const signs = Object.keys(operations);

const gameDescription = 'What is the result of the expression?';

const getTask = () => {
  const a = getRandomInteger(1, 10);
  const b = getRandomInteger(1, 10);
  const sign = signs[getRandomInteger(1, signs.length) - 1];
  const operation = operations[sign];
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = operation(a, b).toString();
  return cons(question, rightAnswer);
};

export default () => playGame(gameDescription, getTask);
