import { getRandomNum } from '../tools.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateBrainPrime = () => {
  return {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRoundData: () => {
      const roundData = {};

      const question = getRandomNum(0, 100);
      roundData.question = question;
      roundData.correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

      return roundData;
    },
  };
};

export default generateBrainPrime;
