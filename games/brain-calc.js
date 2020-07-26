import { greeting } from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

export const brainCalcGame = () => {
    let name = greeting();
    console.log(`What is the result of the expression?`);
    let allAnswers = 0;

    while (allAnswers <= 3) {
        const operations = ['+', '-', '*'];//Операторы
        const firstNum = Math.floor(Math.random() * 100);//Первый операнд
        const secondNum = Math.floor(Math.random() * 100);//Второй операнд
        const getOperator = (min, max) => {
            return  Math.floor(Math.random() * (max - min) + min);
        };//Функция для получения оператора
        const operator = operations[getOperator(0, operations.length)];//Записываем полученный оператор в переменную
        const correctAnswer = eval(firstNum + operator + secondNum);//Правильный ответ
        console.log(`Question: ${firstNum} ${operator} ${secondNum}`);//Вопрос для клиента
        const result = (readlineSync.question('Your answer: '));//Получаем от клиента ответ
        if (Number(result) === correctAnswer) {
            allAnswers+=1;
            console.log(`Correct!`);
        } else {
            console.log(`"${result}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (allAnswers === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    };
};






