export const getRandomElem = (collection) => {
  const min = 0;
  const max = collection.length;

  const getSerialNumberOfElem = (minimum, maximum) => Math
    .floor(Math
      .random() * (maximum - minimum) + minimum);
  const randomElem = collection[getSerialNumberOfElem(min, max)];

  return randomElem;
};

export const getRandomNum = () => Math.round(Math.random() * 100 + 1);
