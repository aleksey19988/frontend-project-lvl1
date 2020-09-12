import readlineSync from 'readline-sync';
import getClientName from './cli.js';

const NUMBER_OF_ROUNDS = 3;

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = getClientName();
  console.log(game.rule);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const { question, correctAnswer } = game.generateRound();
    console.log(`Question: ${question}`);// Задаём вопрос

    const clientAnswer = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную

    if (correctAnswer === clientAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${clientAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
