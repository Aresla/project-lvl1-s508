import { cons } from 'hexlet-pairs';
import { generateFromZeroToNine, generateWholeNum } from './generateWholeNum';
import { calculateExpression, generateExpression, generateOperation } from './generateExpression';
import findGCD from './findGCD';
import checkPrime from './checkPrime';

const checkParity = num => (num % 2 === 0);

const getTaskEven = () => {
  const num = generateWholeNum();
  const rightAnswer = checkParity(num) ? 'yes' : 'no';
  return buildGamePackage(num, rightAnswer);
};

const getTaskCalc = () => {
  const numOne = generateWholeNum();
  const numTwo = generateWholeNum();
  const operation = generateOperation();
  const expression = generateExpression(numOne, numTwo, operation);
  const rightAnswer = calculateExpression(numOne, numTwo, operation).toString();
  return buildGamePackage(expression, rightAnswer);
};

const getTaskGCD = () => {
  const num1 = generateWholeNum();
  const num2 = generateWholeNum();
  const question = `${num1} ${num2}`;
  const rightAnswer = findGCD(num1, num2).toString();
  return buildGamePackage(question, rightAnswer);
};

const getTaskProgression = () => {
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
  return buildGamePackage(result, rightAnswer);
};

const getTaskPrime = () => {
  const num = generateWholeNum();
  const rightAnswer = checkPrime(num);
  return buildGamePackage(num, rightAnswer);
};

const getTask = (gameName) => {
  switch (gameName) {
    case 'even':
      return getTaskEven();
    case 'calc':
      return getTaskCalc();
    case 'gcd':
      return getTaskGCD();
    case 'progression':
      return getTaskProgression();
    case 'prime':
      return getTaskPrime();
    default:
      return 'unexpected game name';
  }
};

export default getTask;
