import readlineSync from 'readline-sync';// Импорт для получения ввода от пользователя
import _ from 'lodash';// Импорт для отброса повторяющихся делителей
import greeting from '../../bin/brain-games-run.js';

const brainGcdGame = () => {
  const name = greeting;
  console.log('Find the greatest common divisor of given numbers.');

  const generateRound = () => {
    const roundData = {};
    roundData.firstNum = Math.floor(Math.random() * 100);// Первое число
    roundData.secondNum = Math.floor(Math.random() * 100);// Второе число
    const firstDivisors = [];// Делители первого числа
    const secondDivisors = [];// Делители второго числа
    const commonDivisors = [];// Общие делители

    for (let i = 1; i <= roundData.firstNum; i += 1) {
      if (roundData.firstNum % i === 0) {
        firstDivisors.push(i);
      }
    }// Находим все делители первого числа

    for (let i = 1; i <= roundData.secondNum; i += 1) {
      if (roundData.secondNum % i === 0) {
        secondDivisors.push(i);
      }
    }// Находим все делители второго числа

    if (roundData.firstNum < roundData.secondNum) {
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

    const commonDivisorsNoDuplicates = _.uniq(commonDivisors);/* Убираем дубликаты
    из списка делителей */
    roundData.greatestCommon = Math.max(...commonDivisorsNoDuplicates);/* Находим наибольший
    делитель */
    return roundData;
  };// Функция для генерации данных раунда (чисел и правильного ответа)

  const gamePlaying = () => {
    let allAnswers = true;
    for (let i = 0; i < 3; i += 1) {
      const round = generateRound();
      console.log(`Question: ${round.firstNum} ${round.secondNum}`);// Вопрос для клиента
      const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
      if (result === toString(round.greatestCommon)) {
        console.log('Correct!');
      } else {
        allAnswers = false;
        console.log(`"${result}" is wrong answer ;(. Correct answer was "${round.greatestCommon}".`);
        console.log(`Let's try again, ${name}!`);
        break;
      }// Проверяем корректность введённых данных
    }
    if (allAnswers) {
      console.log(`Congratulations, ${name}!`);
    }
  };

  gamePlaying();
};

brainGcdGame();

export default brainGcdGame;
