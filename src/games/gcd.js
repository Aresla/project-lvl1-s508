import gameEngine, { buildGamePackage, buildTask } from '..';
import generateWholeNum from '../helpers/generateWholeNum';

const findGcd = (num1, num2) => {
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

const gameDescription = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  const taskGenerator = () => {
    const num1 = generateWholeNum(1, 10);
    const num2 = generateWholeNum(1, 10);
    const question = `${num1} ${num2}`;
    const rightAnswer = findGcd(num1, num2).toString();
    return buildTask(question, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerator);
  gameEngine(gamePackage);
};

export default startGame;
