import readlineSync from 'readline-sync';

export let userName;


export const clientName = () => {
    userName = readlineSync.question('May I have your name? ', {defaultInput: 'John'});
    console.log(`Hello, ${userName}!`);
}