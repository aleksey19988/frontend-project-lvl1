#!/usr/bin/env node

import { clientName, userName } from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Welcome to the Brain Games!`);
clientName();
console.log(`What number is missing in the progression?`);


let allAnswers = 0;

while (allAnswers <= 3) {
    const arrOfNum = [];//Массив чисел
    let firstNumInArr = Math.floor(Math.random() * 100);//Первое число для массива (чтобы каждый раз массив был с новыми числами)
    arrOfNum.push(firstNumInArr);//Добавили первое число в массив
    while (arrOfNum.length < 10) {
        arrOfNum.push(firstNumInArr);
        firstNumInArr+=2;
    };//Цикл для образования массива
    const getNum = (min, max) => {
        return  Math.floor(Math.random() * (max - min) + min);
    };//Функция для получения числа из массива
    const isResultingNum = arrOfNum[getNum(0, arrOfNum.length)];//Получаем число, которое должен найти пользователь
    console.log(`Искомое число ${isResultingNum}`);
    // const correctAnswer = isResultingNum;//Правильный ответ
    const getNewArr = () => {
        const indexNumInArr = arrOfNum.indexOf(isResultingNum);
        arrOfNum[indexNumInArr] = '..';
        return arrOfNum.join(', ');
    }//Функция для замены числа на две точки
    console.log(`Question: ${getNewArr()}`);
    readlineSync.setDefaultOptions({
        prompt: {
            toString: function() {
                return `Your answer: `;
            }
        }
    });//Функция для добавления в начало ответа фразы 'Your answer', т.к. по дефолту идёт символ '>'
    const input = (readlineSync.prompt());//Клиент вводит ответ
    if (Number(input) === isResultingNum) {
        allAnswers+=1;
        console.log(`Correct!`);
    } else {
        console.log(`"${input}" is wrong answer ;(. Correct answer was "${isResultingNum}".`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
    if (allAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
    }
}