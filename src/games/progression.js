import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';


const numberOfProgressionMembers = 10;

const gameDescription = 'What number is missing in the progression?';

const getGamePackage = () => {
  const getTask = () => {
    const start = getInteger(1, 10);
    let result = '';
    let currentValue = start;
    let rightAnswer;
    const step = getInteger(2, 10);
    const missingMemberIndex = getInteger(0, 9);
    for (let i = 0; i < numberOfProgressionMembers; i += 1) {
      if (i === missingMemberIndex) {
        result = `${result} ..`;
        rightAnswer = currentValue.toString();
        currentValue += step;
      } else {
        result = `${result} ${currentValue}`;
        currentValue += step;
      }
    }
    return cons(result, rightAnswer);
  };
  const gamePackage = cons(gameDescription, getTask);
  return gamePackage;
};

const startGame = () => {
  const gamePackage = getGamePackage();
  gameEngine(gamePackage);
};

export default startGame;
