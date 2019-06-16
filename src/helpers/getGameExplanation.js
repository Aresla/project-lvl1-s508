export const getGameExplanation = (gameName) => {
  switch (gameName) {
    case 'even':
      return 'Answer "yes" if number even otherwise answer "no".';
    case 'calc':
      return 'What is the result of the expression?';
    case 'gcd':
      return 'Find the greatest common divisor of given numbers.';
    case 'progression':
      return 'What number is missing in the progression?';
    case 'prime':
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    default:
      return 'unexpected game name';
  }
};
