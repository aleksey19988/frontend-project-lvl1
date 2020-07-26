import { greeting } from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

export const brainPrimeGame = () => {
    let name = greeting();
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    let allAnswers = 0;

    while (allAnswers <= 3) {
        const requierdNum = Math.floor(Math.random() * 100);//Получаем число для определения простое ли оно
        let correctAnswer = 'yes';
        const isPrimeNumber = (requierdNum) => {
            for (let i = 2; i < requierdNum; i+=1) {
                if (requierdNum % i === 0) {
                    correctAnswer = 'no';
                }
            }
        }//Функция для определения простое ли число
        isPrimeNumber(requierdNum);
        console.log(`Question: ${requierdNum}`);
        const result = (readlineSync.question('Your answer: '));//Получаем от клиента ответ
        console.log(`Question: ${requierdNum}`);//Спрашиваем простое ли число
        if (input === correctAnswer) {
            allAnswers+=1;
            console.log(`Correct!`);
        } else {
            console.log(`"${input}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (allAnswers === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    };
};