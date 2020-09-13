import { getRandomNum, getRandomElem } from '../tools.js';

const performOperation = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('Incorrect operation');
  }
};

const generateBrainCalc = () => ({
  rule: 'What is the result of the expression?',
  generateRound: () => {
    const operations = ['+', '-', '*'];
    const randomOperation = getRandomElem(operations);
    const firstNum = getRandomNum(0, 100);
    const secondNum = getRandomNum(0, 100);
    const correctAnswer = performOperation(firstNum, secondNum, randomOperation);

    return {
      correctAnswer: String(correctAnswer),
      question: `${firstNum} ${randomOperation} ${secondNum}`,
    };
  },
});

export default generateBrainCalc;
