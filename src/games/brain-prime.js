const generateRoundBrainPrime = () => {
  const roundDate = [];
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const question = Math.floor(Math.random() * 100);/* Получаем число для определения простое ли оно */
    let correctAnswer;
    const isPrimeNumber = (num) => {
      for (let i = 1; i < num; i += 1) {
        if (num === 1) {
          correctAnswer = 'yes';
        } else if (num % i === 0) {
          correctAnswer = 'no';
        } else {
          correctAnswer = 'yes';
        }
      }
    };// Функция для определения простое ли число
    isPrimeNumber(question);
    round.question = question;
    round.correctAnswer = correctAnswer;
    roundDate.push(round);
  }
  return roundDate;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateRoundBrainPrime;
