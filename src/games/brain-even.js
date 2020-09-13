import { getRandomNum } from '../tools.js';

const isEven = (number) => number % 2 === 0;

const generateBrainEven = () => ({
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: () => {
    const randomNum = getRandomNum(0, 100);

    return {
      question: randomNum,
      correctAnswer: isEven(randomNum) ? 'yes' : 'no',
    };
  },
});

export default generateBrainEven;
