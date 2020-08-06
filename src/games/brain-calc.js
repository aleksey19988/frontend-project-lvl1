import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainCalcGame = () => {
  const name = greeting;
  console.log('What is the result of the expression?');

  const generateRound = () => {
    const roundData = [];
    for (let i = 0; i < 3; i += 1) {
      const round = {};
      const operations = ['+', '-', '*'];// Операторы
      const firstNum = Math.floor(Math.random() * 100);// Первый операнд
      const secondNum = Math.floor(Math.random() * 100);// Второй операнд
      const getOperator = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для получения оператора */
      const operator = operations[getOperator(0, operations.length)];/* Записываем полученный оператор в переменную */
      round.question = `${firstNum} ${operator} ${secondNum}`;
      if (round.operator === '+') {
        round.correctAnswer = firstNum + secondNum;
      } else if (round.operator === '-') {
        round.correctAnswer = firstNum - secondNum;
      } else {
        round.correctAnswer = firstNum * secondNum;
      }
      roundData.push(round);
    }
    return roundData;
  };// Функция для генерации данных раунда (операндов и правильного ответа)

  const rounds = generateRound();// Получаем коллекцию вопросов и правильных ответов

  const gamePlaying = (questions) => {
    let allAnswersCorrect = true;// Предполагаем, что все ответы будут правильными
    for (let i = 0; i < 3; i += 1) {
      console.log(`Question: ${questions[i].question}`);// Вопрос для клиента
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (Number(result) === questions[i].correctAnswer) {
        console.log('Correct!');
      } else {
        allAnswersCorrect = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${questions[i].correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (allAnswersCorrect) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  gamePlaying(rounds);
};

brainCalcGame();

export default brainCalcGame;
