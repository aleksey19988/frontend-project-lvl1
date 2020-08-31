import { getRandomElem, getRandomNum, hideNumberInCollection } from '../tools.js';

const generateBrainProgression = () => {
  const gameData = {
    rule: 'What number is missing in the progression?',
    rounds: [],
  };

  for (let i = 0; i < 3; i += 1) {
    const round = {};

    const numbers = [];// Массив чисел
    const lengthOfNumbers = 10;
    const diffOfNums = getRandomNum();

    for (let j = 0; j <= lengthOfNumbers; j += 1) {
      numbers.push(j + diffOfNums * j);
    }

    const searchingElem = getRandomElem(numbers);

    round.question = hideNumberInCollection(numbers, searchingElem).join(', ');
    round.correctAnswer = String(searchingElem);
    gameData.rounds.push(round);
  }
  return gameData;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
