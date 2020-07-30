import readlineSync from 'readline-sync';

const clientName = () => {
  let userName = 0;
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default clientName;
