import { getRandomNum } from '../tools.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
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
