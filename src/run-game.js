import readlineSync from 'readline-sync';
import clientName from './cli.js';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = clientName();
  console.log(game.rule);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`${i}-й раунд ${game.rounds[i]}`);
    console.log(`Question: ${game.rounds[i].question}`);// Задаём вопрос
    const clientAnswer = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную
    if (game.rounds[i].correctAnswer === clientAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${clientAnswer}" is wrong answer ;(. Correct answer was "${game.rounds[i].correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
