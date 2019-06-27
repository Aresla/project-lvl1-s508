import gameEngine, { buildTask, buildGamePackage } from '..';
import generateWholeNum from '../helpers/generateWholeNum';

const operations = {
  1: {
    symbol: '+',
    operation: (x, y) => x + y,
  },
  2: {
    symbol: '-',
    operation: (x, y) => x - y,
  },
  3: {
    symbol: '*',
    operation: (x, y) => x * y,
  },
};

const gameDescription = 'What is the result of the expression?';

const startGame = () => {
  const taskGenerator = () => {
    const numOne = generateWholeNum(1, 10);
    const numTwo = generateWholeNum(1, 10);
    const operationKey = generateWholeNum(1, 3);
    const { symbol, operation } = operations[operationKey];
    const expression = `${numOne} ${symbol} ${numTwo}`;
    const rightAnswer = operation(numOne, numTwo).toString();
    return buildTask(expression, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerator);
  gameEngine(gamePackage);
};

export default startGame;
