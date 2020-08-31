import { getRandomNum } from '../tools.js';

const generateBrainEven = () => {
  const gameData = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    round: {},
  };

  const generateRound = () => {
    const roundData = {};

    const isEven = (number) => number % 2 === 0;
    roundData.question = getRandomNum();// Получаем число от 0 до 99
    roundData.correctAnswer = isEven(roundData.question) ? 'yes' : 'no';

    return roundData;
  };

  gameData.round = generateRound();

  return gameData;
};
console.log(generateBrainEven());
export default generateBrainEven;
