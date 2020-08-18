export const getRandomElem = (collection) => {
  const min = 0;
  const max = collection.length;
  const getSerialNumberOfElem = (min, max) => Math.floor(Math.random() * (max - min) + min);/* Функция для получения порядкового номера скрываемого числа */
  const randomElem = collection[getSerialNumberOfElem(min, max)];/* Получаем число, которое должен найти пользователь */
  return randomElem;
};

export const getRandomNum = () => Math.round(Math.random() * 100 + 1);

// export default getRandomNum;

export const isPrimeNumber = (num) => {
  for (let i = 3; i <= num; i += 1) {
    if (i === num) {
      return 'yes';
    }
    if (num % i === 0 || num === 1 || num % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const findDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};
