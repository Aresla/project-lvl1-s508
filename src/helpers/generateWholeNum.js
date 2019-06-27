
const generateWholeNum = (rangeFrom, rangeTo) => {
  const randomFloat = (Math.random() * (rangeTo - rangeFrom)) + rangeFrom;
  return Math.floor(randomFloat);
};

export default generateWholeNum;
