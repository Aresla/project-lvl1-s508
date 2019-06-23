import gameEngine, { buildGamePackage, buildTask } from '..';
import { generateFromZeroToNine, generateWholeNum } from '../helpers/generateWholeNum';

const startGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  const taskGenerationFunction = () => {
    const start = generateWholeNum();
    let result = '';
    let currentValue = start;
    let rightAnswer;
    const step = 2;
    const missingMemberIndex = generateFromZeroToNine();
    for (let i = 0; i < 10; i += 1) {
      if (i === missingMemberIndex) {
        result += ' ..';
        rightAnswer = currentValue.toString();
        currentValue += step;
      } else {
        result = `${result} ${currentValue}`;
        currentValue += step;
      }
    }
    return buildTask(result, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};

export default startGame;
