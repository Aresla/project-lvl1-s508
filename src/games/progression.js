import playGame from '..';
import getRandomInteger from '../helpers/getRandomInteger';
import { cons } from 'hexlet-pairs';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getTask = () => {
  const start = getRandomInteger(0, 10);
  const step = getRandomInteger(1, 5);
  const progression = getProgression(start, step);
  const missingMemberIndex = getRandomInteger(0, progressionLength);
  const rightAnswer = progression[missingMemberIndex].toString();
  progression[missingMemberIndex] = '..';
  const question = `${progression.join(' ')}`;
  return cons(question, rightAnswer);
};
export default () => playGame(gameDescription, getTask);
