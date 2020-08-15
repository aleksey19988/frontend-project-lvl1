import { getRandomNum, getRandomElem } from '../tools.js';

const generateBrainCalc = () => {
  const roundData = [];
  roundData.push('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const operations = ['+', '-', '*'];// Операторы
    const firstNum = getRandomNum();// Первый операнд
    const secondNum = getRandomNum();// Второй операнд
    const operator = getRandomElem(operations);
    round.question = `${firstNum} ${operator} ${secondNum}`;
    switch (operator) {
      case '+':
        round.correctAnswer = String(firstNum + secondNum);
        break;
      case '-':
        round.correctAnswer = String(firstNum - secondNum);
        break;
      case '*':
        round.correctAnswer = String(firstNum * secondNum);
        break;
      default:
        break;
    }
    roundData.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (операндов и правильного ответа)
export default generateBrainCalc;
