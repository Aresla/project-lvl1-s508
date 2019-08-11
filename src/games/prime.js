import playGame from '..';
import getRandomInteger from '../helpers/getRandomInteger';
import { cons } from 'hexlet-pairs';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTask = () => {
  const question = getRandomInteger(1, 10);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame(gameDescription, getTask);
