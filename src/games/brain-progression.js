import { getRandomElem, getRandomNum, hideNumberInCollection } from '../tools.js';

const generateBrainProgression = () => {
  const roundData = {
    rules: 'What number is missing in the progression?',
    rounds: [],
  };

  for (let i = 0; i < 3; i += 1) {
    const round = {};

    const numbers = [];// Массив чисел
    let firstElemInProgression = getRandomNum();/* Первое число для массива (чтобы каждый раз массив был с новыми числами) */
    numbers.push(firstElemInProgression);// Добавили первое число в массив
    const diffOfNums = getRandomNum();

    for (let i = 1; i <= 10; i += 1) {
      firstElemInProgression += diffOfNums;
      numbers.push(firstElemInProgression);
    }

    const searchingElem = getRandomElem(numbers);

    round.question = hideNumberInCollection(numbers, searchingElem).join(', ');
    round.correctAnswer = String(searchingElem);
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
