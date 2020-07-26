import readlineSync from 'readline-sync';

export const clientName = () => {
    let userName;
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
}