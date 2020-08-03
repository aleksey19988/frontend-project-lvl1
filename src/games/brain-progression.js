import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainProgressionGame = () => {
  const name = greeting;
  console.log('What number is missing in the progression?');

  const generateRound = () => {
    const roundDate = {};
    const arrOfNum = [];// Массив чисел
    let firstNumInArr = Math.floor(Math.random() * 100);/* Первое число для массива
    (чтобы каждый раз массив был с новыми числами) */
    arrOfNum.push(firstNumInArr);// Добавили первое число в массив
    while (arrOfNum.length < 10) {
      arrOfNum.push(firstNumInArr);
      firstNumInArr += 2;
    }// Цикл для образования массива
    const getNum = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для
    получения числа из массива */
    roundDate.isResultingNum = arrOfNum[getNum(0, arrOfNum.length)];/* Получаем число, которое
    должен найти пользователь */
    const getNewArr = () => {
      const indexNumInArr = arrOfNum.indexOf(roundDate.isResultingNum);
      arrOfNum[indexNumInArr] = '..';
      return arrOfNum.join(', ');
    };// Функция для замены числа на две точки
    roundDate.numbers = getNewArr();
    console.log(roundDate);
    return roundDate;
  };// Функция для генерации данных раунда (списка чисел и правильного ответа)

  const gamePlaying = () => {
    let allAnswers = true;
    for (let i = 0; i < 3; i += 1) {
      const round = generateRound();
      console.log(`Question: ${round.numbers}`);
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (Number(result) === round.isResultingNum) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${round.isResultingNum}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (allAnswers) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  gamePlaying();
};

brainProgressionGame();

export default brainProgressionGame;
