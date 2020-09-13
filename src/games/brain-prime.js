import { getRandomNum } from '../tools.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateBrainPrime = () => ({
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRoundData: () => {
    const randomNum = getRandomNum(0, 100);

    return {
      question: randomNum,
      correctAnswer: isPrimeNumber(randomNum) ? 'yes' : 'no',
    };
  },
});
export default generateBrainPrime;
