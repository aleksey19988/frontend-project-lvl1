import { getRandomElem, getRandomNum } from '../tools.js';

const hideNumberInCollection = (collection, elem) => {
  const numbers = collection;
  const indexNumInArr = numbers.indexOf(elem);
  numbers[indexNumInArr] = '..';
  return numbers;
};

const generateBrainProgression = () => {
  const gameData = {
    rule: 'What number is missing in the progression?',
    round: null,
  };

  const generateRound = () => {
    const roundData = {};

    const numbers = [];// Массив чисел
    const lengthOfNumbers = 10;
    const diffOfNums = getRandomNum();

    for (let j = 0; j <= lengthOfNumbers; j += 1) {
      numbers.push(j + diffOfNums * j);
    }

    const searchingElem = getRandomElem(numbers);
    roundData.question = hideNumberInCollection(numbers, searchingElem).join(', ');
    roundData.correctAnswer = String(searchingElem);

    return roundData;
  };

  gameData.round = generateRound;

  return gameData;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
