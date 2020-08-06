import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const gamePlaying = (questions, condition) => {
  const name = greeting;
  console.log(condition);
  let allAnswers = true;
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i].question}`);// Спрашиваем чётное ли число
    const result = readlineSync.question('Your answer: ');// Получаем от клиента ответ
    if (String(questions[i].correctAnswer) === result) {
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

export default gamePlaying;
