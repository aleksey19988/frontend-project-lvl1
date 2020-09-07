import { getRandomNum } from '../tools.js';

const findDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const firstDivisors = findDivisors(firstNum);// Делители первого числа
  const secondDivisors = findDivisors(secondNum);// Делители второго числа

  let commonDivisorsNoDuplicates = [];
  if (firstNum < secondNum) {
    commonDivisorsNoDuplicates = secondDivisors
      .filter((divisor) => firstDivisors.includes(divisor));
  } else {
    commonDivisorsNoDuplicates = firstDivisors
      .filter((divisor) => secondDivisors.includes(divisor));
  }// Составляем список общих неповторяющихся делителей

  return String(Math.max(...commonDivisorsNoDuplicates));
};

const generateBrainGcd = () => {
  const gameData = {
    rule: 'Find the greatest common divisor of given numbers.',
    generateRoundData: null,
  };

  const generateRound = () => {
    const roundData = {};

    const firstNum = getRandomNum(0, 100);// Первое число
    const secondNum = getRandomNum(0, 100);// Второе число

    roundData.question = `${firstNum} ${secondNum}`;
    roundData.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);

    return roundData;
  };

  gameData.generateRoundData = generateRound;

  return gameData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateBrainGcd;
