import readlineSync from 'readline-sync';

export const clientName = () => {
    const userName = readlineSync.question('May I have your name? ', {defaultInput: 'John'});
    console.log(`Hello, ${userName}!`);
}