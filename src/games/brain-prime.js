import { getRandomNum, isPrimeNumber } from '../tools.js';

const generateBrainPrime = () => {
  const gameData = {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    rounds: [],
  };
  for (let i = 0; i < 3; i += 1) {
    const round = {};

    const question = getRandomNum();/* Получаем число для определения простое ли оно */
    round.question = question;
    round.correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
    gameData.rounds.push(round);
  }
  return gameData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateBrainPrime;
