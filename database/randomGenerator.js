const fs = require('fs');

const words = fs.readFileSync('/usr/share/dict/words', 'utf-8').split('\n');

const generateInteger = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const generateWords = (numberOfWords, maxNumberOfWords = 3, minNumberOfWords = 1) => {
  const numWords = numberOfWords || generateInteger(maxNumberOfWords, minNumberOfWords);

  const generatedWords = [];
  for (let i = 0; i < numWords; i++) {
    generatedWords[i] = words[generateInteger(words.length - 1)];
  }

  return generatedWords.join(' ');
};

const generateDateString = (maxDate = '2020-12-31', minDate = '1990-1-1') => {
  const startTime = new Date(minDate).getTime();
  const endTime = new Date(maxDate).getTime();
  const randomDate = new Date(generateInteger(endTime, startTime));
  return [randomDate.getFullYear(), randomDate.getMonth() + 1, randomDate.getDate()].join('-');
};
