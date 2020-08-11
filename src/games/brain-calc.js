const generateRoundBrainCalc = () => {
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const round = {};
    const operations = ['+', '-', '*'];// Операторы
    const firstNum = Math.floor(Math.random() * 100);// Первый операнд
    const secondNum = Math.floor(Math.random() * 100);// Второй операнд
    const getOperator = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для получения оператора */
    const operator = operations[getOperator(0, operations.length)];/* Записываем полученный оператор в переменную */
    round.question = `${firstNum} ${operator} ${secondNum}`;
    switch (operator) {
      case '+':
        round.correctAnswer = firstNum + secondNum;
        break;
      case '-':
        round.correctAnswer = firstNum - secondNum;
        break;
      case '*':
        round.correctAnswer = firstNum * secondNum;
        break;
      default:
        break;
    }
    roundData.push(round);
  }
  return roundData;
};// Функция для генерации данных раунда (операндов и правильного ответа)

export default generateRoundBrainCalc;
