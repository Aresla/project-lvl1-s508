import playGame from '..';
import getRandomInteger from '../helpers/getRandomInteger';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getTask = () => {
  const question = getRandomInteger(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame(gameDescription, getTask);
