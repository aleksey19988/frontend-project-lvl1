import getCorrectAnswerFunc from '../tools.js';

const generateBrainProgression = () => {
  const roundDate = [];
  roundDate.push('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const arrOfNum = [];// Массив чисел
    let firstNumInArr = Math.floor(Math.random() * 100);/* Первое число для массива (чтобы каждый раз массив был с новыми числами) */
    arrOfNum.push(firstNumInArr);// Добавили первое число в массив
    while (arrOfNum.length < 10) {
      firstNumInArr += 2;
      arrOfNum.push(firstNumInArr);
      const correctAnswer = getCorrectAnswerFunc(arrOfNum);
      const getNewArr = () => {
        const indexNumInArr = arrOfNum.indexOf(correctAnswer);
        arrOfNum[indexNumInArr] = '..';
        return arrOfNum.join(', ');
      };// Функция для замены числа на две точки
      const numbers = getNewArr();
      round.question = numbers;
      round.correctAnswer = String(correctAnswer);
      roundDate.push(round);
    }
  }
  return roundDate;
};// Функция для генерации данных раунда (списка чисел и правильного ответа)

export default generateBrainProgression;
