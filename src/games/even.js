import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';


const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getGamePackage = () => {
  const getTask = () => {
    const question = getInteger(1, 10);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
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
