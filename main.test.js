import {
  capitalize,
  reverseString,
  calculator,
  cypher,
  analyzeArray,
} from './main';

test('capitalize the first letter of a string: name = Name', () => {
  expect(capitalize('name')).toMatch('Name');
});

test('reverse a string: name = eman,', () => {
  expect(reverseString('name')).toMatch('eman');
});

describe('math operations', () => {
  test('adds 1 + 4 to equal 5', () => {
    expect(calculator.add(1, 4)).toBe(5);
  });
  test('subtracts 5 - 4 to equal 1', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
  });
  test('multiplies 2 x 4 to equal 8', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
  test('divides 12 / 4 to equal 3', () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });
});

describe('cypher testing', () => {
  test('cypher a string by the number of letters from input: abc,3 = def', () => {
    expect(cypher('abc', 3)).toMatch('def');
  });
  test('cypher a string by the number of letters from input: xyz,3 = abc', () => {
    expect(cypher('xyz', 3)).toMatch('abc');
  });
  test('cypher a string by the number of letters from input: abcde!!,3 = fghij!!', () => {
    expect(cypher('abcde!!', 5)).toMatch('fghij!!');
  });
  test('cypher a string by the number of letters from input: abc,3 = def', () => {
    expect(cypher('abC', 3)).toMatch('deF');
  });
});

test('returns correct min, max, avg, and length', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);

  expect(result).toMatchObject({
    avg: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
