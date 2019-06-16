export const checkIfGameOver = (gameName, isUserAnswerCorrect, correctAnswersCount) => {
  switch (gameName) {
    case 'even': {
      return correctAnswersCount === 3;
    }
    case 'calc': {
      return correctAnswersCount === 0 || correctAnswersCount === 3;
    }
    case 'gcd': {
      return correctAnswersCount === 3;
    }
    case 'progression': {
      return correctAnswersCount === 3;
    }
    case 'prime': {
      return correctAnswersCount === 3;
    }
    default:
      return 'unexpected game name';
  }
};