import { getRandomNum } from '../tools.js';

const isEven = (number) => number % 2 === 0;

const generateBrainEven = () => {
  return {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound: () => {
      const roundData = {};

      roundData.question = getRandomNum(0, 100);
      roundData.correctAnswer = isEven(roundData.question) ? 'yes' : 'no';

      return roundData;
    },
  };
};

export default generateBrainEven;
