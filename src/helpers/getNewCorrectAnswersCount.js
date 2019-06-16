const getNewCorrectAnswersCount = (currentCount, isUserAnswerCorrect) => {
  const newCountValue = isUserAnswerCorrect ? currentCount + 1 : 0;
  return newCountValue;
};

export default getNewCorrectAnswersCount;
