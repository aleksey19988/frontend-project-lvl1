const generateBrainEven = () => {
  const roundData = [];
  roundData.push('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    round.question = Math.round(Math.random() * 100);// Получаем число от 0 до 99
    const isEven = (number) => number % 2 === 0;
    round.correctAnswer = isEven(round.question) ? 'yes' : 'no';
    roundData.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (числа и правильного ответа)

export default generateBrainEven;