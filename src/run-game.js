import readlineSync from 'readline-sync';
import greeting from './games/brain-games.js';

const runGame = (questions) => {
  const name = greeting();
  console.log(questions[0]);
  let allAnswers = true;
  for (let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${questions[i].question}`);// Задаём вопрос
    const clientAnswer = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную
    if (String(questions[i].correctAnswer) === clientAnswer) {
      console.log('Correct!');
    } else {
      allAnswers = false;
      console.log(`"${clientAnswer}" is wrong answer ;(. Correct answer was "${questions[i].correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (allAnswers) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
