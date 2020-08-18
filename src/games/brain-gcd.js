import { getRandomNum, findDivisors } from '../tools.js';

const generateBrainGcd = () => {
  const roundData = {
    rules: 'Find the greatest common divisor of given numbers.',
    rounds: [],
  };
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const firstNum = getRandomNum();// Первое число
    const secondNum = getRandomNum();// Второе число

    const getGreatestCommonDivisor = (firstNum, secondNum) => {
      const firstDivisors = findDivisors(firstNum);// Делители первого числа
      const secondDivisors = findDivisors(secondNum);// Делители второго числа

      let commonDivisorsNoDuplicates = [];
      if (firstNum < secondNum) {
        commonDivisorsNoDuplicates = secondDivisors.filter((divisor) => firstDivisors.includes(divisor));
      } else {
        commonDivisorsNoDuplicates = firstDivisors.filter((divisor) => secondDivisors.includes(divisor));
      }// Составляем список общих неповторяющихся делителей

      return String(Math.max(...commonDivisorsNoDuplicates));
    };

    round.question = `${firstNum} ${secondNum}`;
    round.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);/* Находим наибольший делитель */
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateBrainGcd;
