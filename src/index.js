import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
const great = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default great;
