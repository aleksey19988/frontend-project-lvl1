import { getRandomNum, getRandomElem } from '../tools.js';

const generateBrainCalc = () => {
  return {
    rule: 'What is the result of the expression?',
    generateRound: () => {
      const roundData = {};
      const operations = ['+', '-', '*'];// Операторы
      const firstNum = getRandomNum(0, 100);// Первый операнд
      const secondNum = getRandomNum(0, 100);// Второй операнд
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

      roundData.correctAnswer = String(correctAnswer);
      roundData.question = `${firstNum} ${operator} ${secondNum}`;

      return roundData;
    },
  };
};

export default generateBrainCalc;
