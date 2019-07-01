import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';


const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const signs = Object.keys(operations);

const gameDescription = 'What is the result of the expression?';

const getGamePackage = () => {
  const getTask = () => {
    const a = getInteger(1, 10);
    const b = getInteger(1, 10);
    const signIndex = getInteger(1, signs.length);
    const sign = signs[signIndex - 1];
    const operation = operations[sign];
    const question = `${a} ${sign} ${b}`;
    const rightAnswer = operation(a, b).toString();
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
