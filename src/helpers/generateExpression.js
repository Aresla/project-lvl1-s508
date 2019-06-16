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
  switch (generateZeroOneTwo()) {
    case 0: operation = 'add'; break;
    case 1: operation = 'subtract'; break;
    case 2: operation = 'multiply'; break;
    default: break;
  }
  return operation;
};

export const calculateExpression = (numOne, numTwo, operation) => {
  let result;
  switch (operation) {
    case 'add': {
      result = numOne + numTwo;
      break;
    }
    case 'subtract': {
      result = numOne - numTwo;
      break;
    }
    case 'multiply': {
      result = numOne * numTwo;
      break;
    }
    default: {
      console.log('check calculate expression fn');
    }
  }
  return result;
};
