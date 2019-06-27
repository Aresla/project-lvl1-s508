import gameEngine, { buildGamePackage, buildTask } from '..';
import generateWholeNum from '../helpers/generateWholeNum';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const startGame = () => {
  const taskGenerator = () => {
    const question = generateWholeNum(1, 10);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return buildTask(question, rightAnswer);
  };
  const gamePackage = buildGamePackage(gameDescription, taskGenerator);

  gameEngine(gamePackage);
};


export default startGame;
