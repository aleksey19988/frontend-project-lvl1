import { greeting } from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

export const brainEvenGame = () => {
    let allAnswers = 0;
    let name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (allAnswers <= 3) {
        const Num = Math.round(Math.random() * 100);//Получаем число от 0 до 99
        let correctAnswer = 'yes';
        if (Num % 2 !== 0) {
            correctAnswer = 'no';
        }
        console.log(`Question: ${Num}`);//Спрашиваем чётное ли число
        const result = (readlineSync.question('Your answer: '));//Получаем от клиента ответ
        if (result === 'yes' && Num % 2 === 0) {
            allAnswers+=1;
            console.log(`Correct!`);
        } else if ((result === 'no') && (Num % 2 !== 0)) {
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