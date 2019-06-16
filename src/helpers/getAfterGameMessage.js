const getAfterGameMessage = (userName, correctAnswersCount) => {
  const message = correctAnswersCount === 3 ? `Congratulations, ${userName}!` : '';
  return message;
};

export default getAfterGameMessage;
