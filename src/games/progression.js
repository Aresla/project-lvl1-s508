import gameEngine from '..';
import getInteger from './getInteger';
import { cons } from 'hexlet-pairs';

const membersCount = 10;
const startMin = 0;
const startMax = 10;
const stepMin = 1;
const stepMax = 5;
const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getInteger(startMin, startMax);
  const step = getInteger(stepMin, stepMax);
  const progression = [];
  for (let i = 0; i < membersCount; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getTask = () => {
  const progression = getProgression();
  const missingMemberIndex = getInteger(0, membersCount);
  const missingMember = progression[missingMemberIndex];
  const rightAnswer = missingMember.toString();
  progression[missingMemberIndex] = '..';
  const question = (`${progression.join(' ')}`);
  return cons(question, rightAnswer);
};
const startGame = () => {
  gameEngine(gameDescription, getTask);
};

export default startGame;
