function capitalize(string) {
  let capitalizedString = string[0].toUpperCase() + string.slice(1);
  return capitalizedString;
}
function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};
function getIndexOfString(index, letter) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (lower.includes(letter)) {
    const pos = lower.indexOf(letter);
    const newPos = (pos + index + upper.length) % lower.length;
    return lower[newPos];
  }
  if (upper.includes(letter)) {
    const pos = upper.indexOf(letter);
    const newPos = (pos + index + upper.length) % upper.length;
    return upper[newPos];
  }
  return letter;
}

function cypher(string, index) {
  let result = '';
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    result += getIndexOfString(index, chars[i]);
  }

  return result;
}

function getMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
function getMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
function getAvg(array) {
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg += array[i];
  }
  return avg / array.length;
}
function analyzeArray(array) {
  return {
    avg: getAvg(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, cypher, analyzeArray };
