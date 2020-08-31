import { getRandomNum, getRandomElem } from '../tools.js';

const generateBrainCalc = () => {
  const gameData = {
    rule: 'What is the result of the expression?',
    round: null,
  };

  const generateRound = () => {
    const roundData = {};
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

    roundData.correctAnswer = String(correctAnswer);
    roundData.question = `${firstNum} ${operator} ${secondNum}`;

    return roundData;
  };

  gameData.round = generateRound;

  return gameData;
};

export default generateBrainCalc;
