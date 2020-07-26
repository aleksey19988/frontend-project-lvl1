import { greeting } from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

export const brainProgressionGame = () => {
    let name = greeting();
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
        const getNewArr = () => {
            const indexNumInArr = arrOfNum.indexOf(isResultingNum);
            arrOfNum[indexNumInArr] = '..';
            return arrOfNum.join(', ');
        }//Функция для замены числа на две точки
        console.log(`Question: ${getNewArr()}`);
        const result = (readlineSync.question('Your answer: '));//Получаем от клиента ответ
        if (Number(result) === isResultingNum) {
            allAnswers+=1;
            console.log(`Correct!`);
        } else {
            console.log(`"${result}" is wrong answer ;(. Correct answer was "${isResultingNum}".`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (allAnswers === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    };
};