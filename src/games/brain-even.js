import { getRandomNum } from '../tools.js';

const generateBrainEven = () => {
  const roundData = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    rounds: [],
  };
  const isEven = (number) => number % 2 === 0;
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    round.question = getRandomNum();// Получаем число от 0 до 99
    round.correctAnswer = isEven(round.question) ? 'yes' : 'no';
    roundData.rounds.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (числа и правильного ответа)

export default generateBrainEven;
