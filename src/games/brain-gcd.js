import readlineSync from 'readline-sync';// Импорт для получения ввода от пользователя
import _ from 'lodash';// Импорт для отброса повторяющихся делителей
import greeting from '../../bin/brain-games-run.js';

const brainGcdGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let allAnswers = 0;

  while (allAnswers <= 3) {
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

    const commonDivisorsNoDuplicates = _.uniq(commonDivisors);/* Убираем дубликаты
    из списка делителей */
    const correctAnswer = Math.max(...commonDivisorsNoDuplicates);// Находим наибольший делитель

    console.log(`Question: ${firstNum} ${secondNum}`);// Вопрос для клиента
    const result = (readlineSync.question('Your answer: '));// Получаем от клиента ответ
    if (Number(result) === correctAnswer) {
      allAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${result}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }// Проверяем корректность введённых данных
    if (allAnswers >= 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }// Проверяем сколько ответов дано
  }
};

export default brainGcdGame;
