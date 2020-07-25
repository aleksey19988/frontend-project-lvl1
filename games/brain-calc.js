#!/usr/bin/env node

import { clientName, userName } from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Welcome to the Brain Games!`);
clientName();
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
    readlineSync.setDefaultOptions({
        prompt: {
            toString: function() {
                return `Your answer: `;
            }
        }
    });//Функция для добавления в начало ответа фразы 'Your answer', т.к. по дефолту идёт символ '>'
    const input = (readlineSync.prompt());//Клиент вводит ответ
    if (Number(input) === correctAnswer) {
        allAnswers+=1;
        console.log(`Correct!`);
    } else {
        console.log(`"${input}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
    if (allAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
    }
}






