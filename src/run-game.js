import readlineSync from 'readline-sync';
import greeting from './brain-games.js';

const runGame = (game) => {
  const name = greeting();
  console.log(game.rules);
  let allAnswers = true;
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`Question: ${game.rounds[i].question}`);// Задаём вопрос
    const clientAnswer = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную
    if (game.rounds[i].correctAnswer === clientAnswer) {
      console.log('Correct!');
    } else {
      allAnswers = false;
      console.log(`"${clientAnswer}" is wrong answer ;(. Correct answer was "${game.rounds[i].correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (allAnswers) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
