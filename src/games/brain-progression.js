import { getRandomElem, getRandomNum } from '../tools.js';

const generateBrainProgression = () => {
  const roundData = {
    rules: 'What number is missing in the progression?',
    rounds: [],
  };
  // roundData.push('What number is missing in the progression?');
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

    const getNewArr = () => {
      const indexNumInArr = numbers.indexOf(searchingElem);
      numbers[indexNumInArr] = '..';
      return numbers;
    };// Функция для замены числа на две точки

    round.question = getNewArr().join(', ');
    round.correctAnswer = String(searchingElem);
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
