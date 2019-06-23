import gameEngine from '..';
import {buildGamePackage} from "../index";
import {generateWholeNum} from "../helpers/generateWholeNum";
import {calculateExpression, generateExpression, generateOperation} from "../helpers/generateExpression";

const startGame = () => {
  const gameDescription = 'What is the result of the expression?';
  const taskGenerationFunction = () => {
    const numOne = generateWholeNum();
    const numTwo = generateWholeNum();
    const operation = generateOperation();
    const question = generateExpression(numOne, numTwo, operation);
    const rightAnswer = calculateExpression(numOne, numTwo, operation).toString();
    return buildGamePackage(question, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerationFunction);
  gameEngine(gamePackage);
};

export default startGame;
