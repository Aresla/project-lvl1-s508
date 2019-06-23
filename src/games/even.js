import gameEngine, { buildGamePackage, buildTask } from '..';
import { generateWholeNum } from '../helpers/generateWholeNum';

const checkParity = num => (num % 2 === 0);

const startGame = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  const taskGenerationFunction = () => {
    const questionNum = generateWholeNum();
    const rightAnswer = checkParity(questionNum) ? 'yes' : 'no';
    return buildTask(questionNum, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};


export default startGame;
