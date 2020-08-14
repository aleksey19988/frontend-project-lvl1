export const getCorrectAnswerFunc = (array) => {
  const getSerialNumberOfNum = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для получения порядкового номера скрываемого числа */
  const correctAnswer = array[getSerialNumberOfNum(0, array.length)];/* Получаем число, которое должен найти пользователь */
  return correctAnswer;
};

export const getRandomNum = () => Math.round(Math.random() * 100);
