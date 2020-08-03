import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainEvenGame = () => {
  const name = greeting;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const generateRound = () => {
    const roundData = {};
    roundData.question = Math.round(Math.random() * 100);// Получаем число от 0 до 99
    const isEven = (number) => number % 2 === 0;
    roundData.answer = isEven(roundData.question) ? 'yes' : 'no';
    return roundData;
  };// Функция для генерации данных раунда (числа и правильного ответа)

  const gamePlaying = () => {
    let allAnswers = true;
    for (let i = 0; i < 3; i += 1) {
      const round = generateRound();
      console.log(`Question: ${round.question}`);// Спрашиваем чётное ли число
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (round.answer === result) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${round.answer}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (allAnswers) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  gamePlaying();
};

brainEvenGame();

export default brainEvenGame;
