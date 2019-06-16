export const getNewCorrectAnswersCount = (currentCount, isUserAnswerCorrect) => {
  return isUserAnswerCorrect ? currentCount + 1 : 0;
};
