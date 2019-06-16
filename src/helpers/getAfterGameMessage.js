export const getAfterGameMessage = (userName, correctAnswersCount) => {
  return correctAnswersCount === 3 ? `Congratulations, ${userName}!` : '';
};
