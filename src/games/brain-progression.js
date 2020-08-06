import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainProgressionGame = () => {
  const name = greeting;
  console.log('What number is missing in the progression?');

  const generateRound = () => {
    const roundDate = [];
    for (let i = 0; i < 3; i += 1) {
      const round = {};
      const arrOfNum = [];// Массив чисел
      let firstNumInArr = Math.floor(Math.random() * 100);/* Первое число для массива (чтобы каждый раз массив был с новыми числами) */
      arrOfNum.push(firstNumInArr);// Добавили первое число в массив
      while (arrOfNum.length < 10) {
        arrOfNum.push(firstNumInArr);
        firstNumInArr += 2;
      }// Цикл для образования массива
      const getNum = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для замены любого числа на две точки */
      const correctAnswer = arrOfNum[getNum(0, arrOfNum.length)];/* Получаем число, которое должен найти пользователь */
      const getNewArr = () => {
        const indexNumInArr = arrOfNum.indexOf(correctAnswer);
        arrOfNum[indexNumInArr] = '..';
        return arrOfNum.join(', ');
      };// Функция для замены числа на две точки
      const numbers = getNewArr();
      round.question = numbers;
      round.correctAnswer = correctAnswer;
      roundDate.push(round);
    }
    return roundDate;
  };// Функция для генерации данных раунда (списка чисел и правильного ответа)

  const rounds = generateRound();

  const gamePlaying = (questions) => {
    let allAnswers = true;
    for (let i = 0; i < 3; i += 1) {
      console.log(`Question: ${questions[i].question}`);
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (Number(result) === questions[i].correctAnswer) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${questions[i].correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (allAnswers) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  gamePlaying(rounds);
};

brainProgressionGame();

export default brainProgressionGame;
