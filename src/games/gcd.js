import gameEngine, { buildGamePackage } from '..';
import { generateWholeNum } from '../helpers/generateWholeNum';

const findGCD = (num1, num2) => {
  let numOne = num1;
  let numTwo = num2;
  while (numOne !== 0 && numTwo !== 0) {
    if (numOne > numTwo) {
      numOne %= numTwo;
    } else {
      numTwo %= numOne;
    }
  }
  return numOne > numTwo ? numOne : numTwo;
};

const startGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const taskGenerationFunction = () => {
    const num1 = generateWholeNum();
    const num2 = generateWholeNum();
    const question = `${num1} ${num2}`;
    const rightAnswer = findGCD(num1, num2).toString();
    return buildGamePackage(question, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};

export default startGame;
