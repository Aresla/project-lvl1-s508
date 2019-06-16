import { generateZeroOneTwo } from './generateWholeNum';

export const generateExpression = (numOne, numTwo, operation) => {
  let expression;
  switch (operation) {
    case 'add': expression = `${numOne} + ${numTwo}`; break;
    case 'subtract': expression = `${numOne} - ${numTwo}`; break;
    case 'multiply': expression = `${numOne} * ${numTwo}`; break;
    default: break;
  }
  return expression;
};

export const generateOperation = () => {
  let operation;
  switch (generateZeroOneTwo()){
    case 0: operation = 'add'; break;
    case 1: operation = 'subtract'; break;
    case 2: operation = 'multiply'; break;
    default: break;
  }
  return operation;
};

export const calculateExpression = (numOne, numTwo, operation) => {
  switch (operation) {
    case 'add': return numOne + numTwo;
    case 'subtract': return numOne - numTwo;
    case 'multiply': return numOne * numTwo;
  }
};