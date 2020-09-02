import readlineSync from 'readline-sync';

const getClientName = () => {
  let userName = '';
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default getClientName;
