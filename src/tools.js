export const getRandomNum = (minimum, maximum) => {
  const rand = minimum + Math.random() * (maximum + 1 - minimum);
  return Math.floor(rand);
};

export const getRandomIndex = (collection) => {
  const min = 0;
  const max = collection.length - 1;

  return getRandomNum(min, max);
};

export const getRandomElem = (collection) => collection[getRandomIndex(collection)];
