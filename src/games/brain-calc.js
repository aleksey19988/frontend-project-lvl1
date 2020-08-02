import readlineSync from 'readline-sync';
import greeting from '../../bin/brain-games-run.js';

const brainCalcGame = () => {
  const name = greeting;
  console.log('What is the result of the expression?');
  let allAnswersCorrect = true;// Предполагаем, что все ответы будут правильными

  const generateRound = () => {
    const roundData = {};
    const operations = ['+', '-', '*'];// Операторы
    roundData.firstNum = Math.floor(Math.random() * 100);// Первый операнд
    roundData.secondNum = Math.floor(Math.random() * 100);// Второй операнд
    const getOperator = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для
  получения оператора */
    roundData.operator = operations[getOperator(0, operations.length)];/* Записываем
    полученный оператор в переменную */
    if (roundData.operator === '+') {
      roundData.correctAnswer = roundData.firstNum + roundData.secondNum;
    } else if (roundData.operator === '-') {
      roundData.correctAnswer = roundData.firstNum - roundData.secondNum;
    } else {
      roundData.correctAnswer = roundData.firstNum * roundData.secondNum;
    }
    return roundData;
  };// Функция для генерации данных раунда (операндов и правильного ответа)

  for (let i = 0; i < 3; i += 1) {
    const round = generateRound();
    console.log(`Question: ${round.firstNum} ${round.operator} ${round.secondNum}`);// Вопрос для клиента
    const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
    if (result === toString(round.correctAnswer)) {
      console.log('Correct!');
    } else {
      allAnswersCorrect = false;
      console.log(`"${result}" is wrong answer ;(. Correct answer was "${round.correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (allAnswersCorrect) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainCalcGame;
