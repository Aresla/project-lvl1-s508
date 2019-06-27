import gameEngine, { buildGamePackage, buildTask } from '..';
import generateWholeNum from '../helpers/generateWholeNum';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  const taskGenerator = () => {
    const num = generateWholeNum(1, 10);
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    return buildTask(num, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerator);
  gameEngine(gamePackage);
};

export default startGame;
