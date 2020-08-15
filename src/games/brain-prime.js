import { getRandomNum, isPrimeNumber } from '../tools.js';

const generateBrainPrime = () => {
  const roundDate = [];
  roundDate.push('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const question = getRandomNum();/* Получаем число для определения простое ли оно */
    round.question = question;
    round.correctAnswer = String(isPrimeNumber(question));
    roundDate.push(round);
  }
  return roundDate;
};// Функция для генерации данных раунда (чисел и правильного ответа)
console.log(generateBrainPrime());
export default generateBrainPrime;
