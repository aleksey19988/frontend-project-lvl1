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

  const getIntersectionOfArrays = (arr1, arr2) => arr1.filter((divisor) => arr2.includes(divisor));

  return String(Math.max(...getIntersectionOfArrays(firstDivisors, secondDivisors)));
};

const generateBrainGcd = () => ({
  rule: 'Find the greatest common divisor of given numbers.',
  generateRound: () => {
    const firstNum = getRandomNum(0, 100);
    const secondNum = getRandomNum(0, 100);

    return {
      question: `${firstNum} ${secondNum}`,
      correctAnswer: getGreatestCommonDivisor(firstNum, secondNum),
    };
  },
});

export default generateBrainGcd;
