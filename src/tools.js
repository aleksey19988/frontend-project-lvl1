export const getRandomNum = (minimum, maximum) => {
  const rand = minimum - 0.5 + Math.random() * (maximum - minimum + 1);
  return Math.round(rand);
};

export const getRandomElem = (collection) => {
  const min = 0;
  const max = collection.length - 1;

  const randomElem = collection[getRandomNum(min, max)];

  return randomElem;
};
