import { getRandomIndex, getRandomNum } from '../tools.js';

const LENGTH_OF_PROGRESSION = 10;

const hideRandomElemInCollection = (collection, index) => {
  const result = collection;
  result[index] = '..';

  return result;
};

const generateArithmeticProgression = () => {
  const progression = [];
  const diffOfNums = getRandomNum(0, 100);

  for (let i = 0; i < LENGTH_OF_PROGRESSION; i += 1) {
    progression.push(i + diffOfNums * i);
  }

  return progression;
};

const generateBrainProgression = () => ({
  rule: 'What number is missing in the progression?',
  generateRound: () => {
    const progression = generateArithmeticProgression();
    const randomIndex = getRandomIndex(progression);

    return {
      correctAnswer: String(progression[randomIndex]),
      question: hideRandomElemInCollection(progression, randomIndex).join(', '),
    };
  },
});

export default generateBrainProgression;
