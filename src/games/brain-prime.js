import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainPrimeGame = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let allAnswers = 0;

  while (allAnswers <= 3) {
    const requiredNum = Math.floor(Math.random() * 100);/* Получаем число для определения
    простое ли оно */
    let correctAnswer = 'yes';
    const isPrimeNumber = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          correctAnswer = 'no';
        }
      }
    };// Функция для определения простое ли число
    isPrimeNumber(requiredNum);
    console.log(`Question: ${requiredNum}`);
    const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
    console.log(`Question: ${requiredNum}`);// Спрашиваем простое ли число
    if (result === correctAnswer) {
      allAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${result}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (allAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainPrimeGame;
