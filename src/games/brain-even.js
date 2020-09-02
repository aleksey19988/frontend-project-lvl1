import { getRandomNum } from '../tools.js';

const isEven = (number) => number % 2 === 0;

const generateBrainEven = () => {
  const gameData = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    round: null,
  };

  const generateRound = () => {
    const roundData = {};

    roundData.question = getRandomNum();
    roundData.correctAnswer = isEven(roundData.question) ? 'yes' : 'no';

    return roundData;
  };

  gameData.round = generateRound;

  return gameData;
};

export default generateBrainEven;
