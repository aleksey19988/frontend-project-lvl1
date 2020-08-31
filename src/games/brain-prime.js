import { getRandomNum } from '../tools.js';

const isPrimeNumber = (num) => {
  let result;
  for (let i = 3; i <= num; i += 1) {
    if (i === num) {
      result = true;
    }
    if (num % i === 0 || num <= 2) {
      result = false;
    }
  }
  return result;
};

const generateBrainPrime = () => {
  const gameData = {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    round: null,
  };

  const generateRound = () => {
    const roundData = {};

    const question = getRandomNum();
    roundData.question = question;
    roundData.correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

    return roundData;
  };

  gameData.round = generateRound;

  return gameData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateBrainPrime;
