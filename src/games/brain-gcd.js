import _ from 'lodash';// Импорт для отброса повторяющихся делителей

const generateRoundBrainGcd = () => {
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const firstNum = Math.floor(Math.random() * 100);// Первое число
    const secondNum = Math.floor(Math.random() * 100);// Второе число
    const firstDivisors = [];// Делители первого числа
    const secondDivisors = [];// Делители второго числа
    const commonDivisors = [];// Общие делители

    for (let i = 1; i <= firstNum; i += 1) {
      if (firstNum % i === 0) {
        firstDivisors.push(i);
      }
    }// Находим все делители первого числа

    for (let i = 1; i <= secondNum; i += 1) {
      if (secondNum % i === 0) {
        secondDivisors.push(i);
      }
    }// Находим все делители второго числа

    if (firstNum < secondNum) {
      for (const value of secondDivisors) {
        if (firstDivisors.includes(value)) {
          commonDivisors.push(value);/* Если в списке делителей первого числа
            находим такие же у второго - добавляем в список общих делителей */
        }
      }
    } else {
      for (const value of firstDivisors) {
        if (secondDivisors.includes(value)) {
          commonDivisors.push(value);/* Если в списке делителей второго числа
            находим такие же у первого - добавляем в список общих делителей */
        }
      }
    }// Составляем список общих неповторяющихся делителей

    const commonDivisorsNoDuplicates = _.uniq(commonDivisors);/* Убираем дубликаты из списка делителей */
    round.question = `${firstNum} ${secondNum}`;
    round.correctAnswer = Math.max(...commonDivisorsNoDuplicates);/* Находим наибольший
      делитель */
    roundData.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (чисел и правильного ответа)

export default generateRoundBrainGcd;
