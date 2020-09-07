import { getRandomNum, getRandomElem } from '../tools.js';

const generateBrainCalc = () => {
  const gameData = {
    rule: 'What is the result of the expression?',
    generateRoundData: null,
  };

  const generateRound = () => {
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
  };

  gameData.generateRoundData = generateRound;

  return gameData;
};

export default generateBrainCalc;
