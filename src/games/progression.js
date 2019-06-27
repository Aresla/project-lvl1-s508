import gameEngine, { buildGamePackage, buildTask } from '..';
import generateWholeNum from '../helpers/generateWholeNum';

const numberOfProgressionMembers = 10;

const gameDescription = 'What number is missing in the progression?';

const startGame = () => {
  const taskGenerator = () => {
    const start = generateWholeNum(1, 10);
    let result = '';
    let currentValue = start;
    let rightAnswer;
    const step = generateWholeNum(2, 10);
    const missingMemberIndex = generateWholeNum(0, 9);
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
    return buildTask(result, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerator);
  gameEngine(gamePackage);
};

export default startGame;
