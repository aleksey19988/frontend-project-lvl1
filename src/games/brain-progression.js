import { getRandomElem, getRandomNum } from '../tools.js';

const generateBrainProgression = () => {
  const roundDate = [];
  roundDate.push('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const arrOfElem = [];// Массив чисел
    let firstNumInArr = getRandomNum();/* Первое число для массива (чтобы каждый раз массив был с новыми числами) */
    arrOfElem.push(firstNumInArr);// Добавили первое число в массив
    const diffOfNums = getRandomNum();
    while (arrOfElem.length < 10) {
      firstNumInArr += diffOfNums;
      arrOfElem.push(firstNumInArr);
    }
    const correctAnswer = getRandomElem(arrOfElem);
    const getNewArr = () => {
      const indexNumInArr = arrOfElem.indexOf(correctAnswer);
      arrOfElem[indexNumInArr] = '..';
      return arrOfElem.join(', ');
    };// Функция для замены числа на две точки
    const numbers = getNewArr();
    round.question = numbers;
    round.correctAnswer = String(correctAnswer);
    roundDate.push(round);
  }
  return roundDate;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)
export default generateBrainProgression;
