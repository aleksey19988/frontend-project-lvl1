import { getRandomElem, getRandomNum, hideNumberInCollection } from '../tools.js';

const generateBrainProgression = () => {
  const roundData = {
    rule: 'What number is missing in the progression?',
    rounds: [],
  };

  for (let i = 0; i < 3; i += 1) {
    const round = {};

    const numbers = [];// Массив чисел
    const lengthOfNumbers = 10;
    const diffOfNums = getRandomNum();

    for (let i = 0; i <= lengthOfNumbers; i += 1) {
      numbers.push(i + diffOfNums * i);
    }

    const searchingElem = getRandomElem(numbers);

    round.question = hideNumberInCollection(numbers, searchingElem).join(', ');
    round.correctAnswer = String(searchingElem);
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
