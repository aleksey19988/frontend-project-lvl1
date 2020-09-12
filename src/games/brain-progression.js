import { getRandomElem, getRandomNum } from '../tools.js';

const LENGTH_OF_PROGRESSION = 10;

const hideRandomElemInCollection = (collection, elem) => {
  const result = collection;
  result[collection.indexOf(elem)] = '..';

  return result;
};

const generateBrainProgression = () => {
  return {
    rule: 'What number is missing in the progression?',
    generateRound: () => {
      const roundData = {};

      const numbers = [];// Массив чисел
      const diffOfNums = getRandomNum(0, 100);

      for (let j = 0; j < LENGTH_OF_PROGRESSION; j += 1) {
        numbers.push(j + diffOfNums * j);
      }

      const searchingElem = getRandomElem(numbers);
      roundData.question = hideRandomElemInCollection(numbers, searchingElem).join(', ');
      roundData.correctAnswer = String(searchingElem);

      return roundData;
    },
  };
};

export default generateBrainProgression;
