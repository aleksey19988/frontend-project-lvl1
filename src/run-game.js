import readlineSync from 'readline-sync';
import clientName from './cli.js';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = clientName();
  console.log(game.rule);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = game.round;
    console.log(roundData);
    const { question: questionForClient, correctAnswer: corrAnswer } = roundData;
    console.log(`Question: ${questionForClient}`);// Задаём вопрос

    const clientAnswer = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную

    if (corrAnswer === clientAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${clientAnswer}" is wrong answer ;(. Correct answer was "${corrAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
