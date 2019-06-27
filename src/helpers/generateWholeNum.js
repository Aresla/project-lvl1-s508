
const generateWholeNum = (rangeFrom, rangeTo) => {
  return Math.floor((Math.random() * (rangeTo - rangeFrom)) + rangeFrom);
};

export default generateWholeNum;
