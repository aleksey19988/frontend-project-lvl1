import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainPrimeGame = () => {
  const name = greeting;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const generateRound = () => {
    const roundDate = [];
    for (let i = 0; i < 3; i += 1) {
      const round = {};
      const question = Math.floor(Math.random() * 100);/* Получаем число для определения простое ли оно */
      let correctAnswer;
      const isPrimeNumber = (num) => {
        for (let i = 1; i < num; i += 1) {
          if (num === 1) {
            correctAnswer = 'yes';
          } else if (num % i === 0) {
            correctAnswer = 'no';
          } else {
            correctAnswer = 'yes';
          }
        }
      };// Функция для определения простое ли число
      isPrimeNumber(question);
      round.question = question;
      round.correctAnswer = correctAnswer;
      roundDate.push(round);
    }
    return roundDate;
  };// Функция для генерации данных раунда (чисел и правильного ответа)

  const rounds = generateRound();

  const gamePlaying = (questions) => {
    let allAnswers = true;
    for (let i = 0; i < 3; i += 1) {
      console.log(`Question: ${questions[i].question}`);// Задаём вопрос клиенту
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (result === questions[i].correctAnswer) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${questions[i].correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
      if (allAnswers) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  };

  gamePlaying(rounds);
};

brainPrimeGame();

export default brainPrimeGame;
