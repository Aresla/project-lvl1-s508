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

export default findGCD;
