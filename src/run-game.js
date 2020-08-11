import readlineSync from 'readline-sync';

const gamePlaying = (questions, condition, name) => {
  console.log(condition);
  let allAnswers = true;
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i].question}`);// Задаём вопрос
    const result = readlineSync.question('Your answer: ');// Получаем от клиента ответ, записываем в переменную
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
