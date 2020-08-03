import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainPrimeGame = () => {
  const name = greeting;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const generateRound = () => {
    const roundDate = {};
    roundDate.requiredNum = Math.floor(Math.random() * 100);/* Получаем число для определения
    простое ли оно */
    roundDate.correctAnswer = 'yes';
    const isPrimeNumber = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          // eslint-disable-next-line no-unused-vars
          roundDate.correctAnswer = 'no';
        }
      }
    };// Функция для определения простое ли число
    isPrimeNumber(roundDate.requiredNum);
    return roundDate;
  };// Функция для генерации данных раунда (чисел и правильного ответа)

  const gamePlaying = () => {
    let allAnswers = true;
    while (allAnswers <= 3) {
      const round = generateRound();
      console.log(`Question: ${round.requiredNum}`);// Задаём вопрос клиенту
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      console.log(`Question: ${round.requiredNum}`);// Спрашиваем простое ли число
      if (result === toString(round.correctAnswer)) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${round.correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
      if (allAnswers) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  };

  gamePlaying();
};

brainPrimeGame();

export default brainPrimeGame;
