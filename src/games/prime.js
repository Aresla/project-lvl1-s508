import gameEngine, { buildGamePackage, buildTask } from '..';
import { generateWholeNum } from '../helpers/generateWholeNum';

const checkPrime = (questionNum) => {
  if (questionNum < 2) {
    return 'no';
  }
  for (let i = 2; i < questionNum; i += 1) {
    if (questionNum % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskGenerationFunction = () => {
    const questionNum = generateWholeNum();
    const rightAnswer = checkPrime(questionNum);
    return buildTask(questionNum, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};

export default startGame;
