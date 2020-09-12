export const getRandomNum = (minimum, maximum) => {
  const rand = minimum + Math.random() * (maximum + 1 - minimum);
  return Math.floor(rand);
};

export const getRandomElem = (collection) => {
  const min = 0;
  const max = collection.length - 1;

  const randomElem = collection[getRandomNum(min, max)];

  return randomElem;
};
