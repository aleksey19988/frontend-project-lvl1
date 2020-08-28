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
  let result;
  for (let i = 3; i <= num; i += 1) {
    if (i === num) {
      result = true;
    }
    if (num % i === 0 || num <= 2) {
      result = false;
    }
  }
  return result;
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

export const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const firstDivisors = findDivisors(firstNum);// Делители первого числа
  const secondDivisors = findDivisors(secondNum);// Делители второго числа

  let commonDivisorsNoDuplicates = [];
  if (firstNum < secondNum) {
    commonDivisorsNoDuplicates = secondDivisors.filter((divisor) => firstDivisors.includes(divisor));
  } else {
    commonDivisorsNoDuplicates = firstDivisors.filter((divisor) => secondDivisors.includes(divisor));
  }// Составляем список общих неповторяющихся делителей

  return String(Math.max(...commonDivisorsNoDuplicates));
};

export const hideNumberInCollection = (collection, elem) => {
  const numbers = collection;
  const indexNumInArr = numbers.indexOf(elem);
  numbers[indexNumInArr] = '..';
  return numbers;
};
