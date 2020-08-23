import clientName from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = clientName();
  return userName;
};

export default greeting;
