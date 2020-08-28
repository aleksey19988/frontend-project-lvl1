import { getRandomNum, getGreatestCommonDivisor } from '../tools.js';

const generateBrainGcd = () => {
  const roundData = {
    rule: 'Find the greatest common divisor of given numbers.',
    rounds: [],
  };
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const firstNum = getRandomNum();// Первое число
    const secondNum = getRandomNum();// Второе число

    round.question = `${firstNum} ${secondNum}`;
    round.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);/* Находим наибольший делитель */
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateBrainGcd;
