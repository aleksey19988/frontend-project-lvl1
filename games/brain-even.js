#!/usr/bin/env node
import { clientName, userName } from '../src/cli.js';
import readlineSync from 'readline-sync';

let allAnswers = 0;

console.log('Welcome to the Brain Games!');
clientName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (allAnswers <= 3) {
    const Num = Math.round(Math.random() * 100);//Получаем число от 0 до 99
    console.log(`Question: ${Num}`);//Спрашиваем чётное ли число
    const result = (readlineSync.question('Your answer: ', {
        trueValue: ['yes'],
        falseValue: ['no']
    }));//Получаем от клиента ответ
    if (result && Num % 2 === 0) {
        allAnswers+=1;
        console.log(`Correct!`);
    } else if ((result === false) && (Num % 2 !== 0)) {
        allAnswers+=1;
        console.log(`Correct!`);
    } else {
        console.log(`"yes" is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
    if (allAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
    }
}