import { getRandomNum, getRandomElem } from '../tools.js';

const generateBrainCalc = () => {
  const roundData = {
    rule: 'What is the result of the expression?',
    rounds: [],
  };
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const operations = ['+', '-', '*'];// Операторы
    const firstNum = getRandomNum();// Первый операнд
    const secondNum = getRandomNum();// Второй операнд
    const operator = getRandomElem(operations);
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = firstNum + secondNum;
        break;
      case '-':
        correctAnswer = firstNum - secondNum;
        break;
      case '*':
        correctAnswer = firstNum * secondNum;
        break;
      default:
        break;
    }
    round.correctAnswer = String(correctAnswer);
    round.question = `${firstNum} ${operator} ${secondNum}`;
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (операндов и правильного ответа)

export default generateBrainCalc;
