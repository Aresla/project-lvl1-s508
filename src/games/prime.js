import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGamePackage = () => {
  const getTask = () => {
    const question = getInteger(1, 10);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return cons(question, rightAnswer);
  };
  const gamePackage = cons(gameDescription, getTask);
  return gamePackage;
};

const startGame = () => {
  const gamePackage = getGamePackage();
  gameEngine(gamePackage);
};

export default startGame;
