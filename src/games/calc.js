import gameEngine, { buildTask, buildGamePackage } from '..';
import { generateWholeNum } from '../helpers/generateWholeNum';
import { calculateExpression, generateExpression, generateOperation } from '../helpers/generateExpression';

const startGame = () => {
  const gameDescription = 'What is the result of the expression?';
  const taskGenerationFunction = () => {
    const numOne = generateWholeNum();
    const numTwo = generateWholeNum();
    const operation = generateOperation();
    const expression = generateExpression(numOne, numTwo, operation);
    const rightAnswer = calculateExpression(numOne, numTwo, operation).toString();
    return buildTask(expression, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};

export default startGame;
