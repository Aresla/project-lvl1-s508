const getConclusionMessage = (userName, userAnswer, rightAnswer) => {
  const isUserAnswerCorrect = userAnswer === rightAnswer;
  return isUserAnswerCorrect ? 'Correct!' : `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`;
};

export default getConclusionMessage;
