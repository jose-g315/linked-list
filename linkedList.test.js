import LinkedList from './linkedList';

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('append and size', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size()).toBe(3);
  });

  test('prepend and headNode', () => {
    list.prepend(10);
    list.prepend(20);
    expect(list.headNode().value).toBe(20);
  });
  test('getting headNode when list is empty', () => {
    expect(list.headNode()).toBeUndefined;
  });
  test('getting tailNode when list is empty', () => {
    expect(list.tailNode()).toBeUndefined;
  });
  test('getting tailNode', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.tailNode().value).toBe(3);
  });
  describe('at tests', () => {
    test('at(index)', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.at(1).value).toBe(2);
    });
    test('at(index) when index is out of bounds', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.at(99)).toBeUndefined();
    });
    test('at(index) when list is empty', () => {
      expect(list.at(0)).toBeUndefined();
    });
  });

  describe('popHead tests', () => {
    test('popHead to remove a value', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.popHead();
      expect(list.at(0).value).toBe(2);
    });
    test('popHead to remove from a list with 1 node', () => {
      list.append(1);
      list.popHead();
      expect(list.at(0)).toBeUndefined();
    });
    test('popHead to remove from an empty list ', () => {
      list.popHead();
      expect(list.at(0)).toBeUndefined();
    });
  });

  describe('contains tests', () => {
    test('contains when value is not in list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.contains(0)).toBeFalsy();
    });
    test('contains when value is  in list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.contains(2)).toBeTruthy();
    });
  });

  describe('findIndex tests', () => {
    test('findIndex when value is in list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.findIndex(1)).toBe(0);
    });
    test('findIndex when value is not in list', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.findIndex(50)).toBe(-1);
    });
    test('findIndex when list is empty', () => {
      expect(list.findIndex(1)).toBe(-1);
    });
  });
  describe('insertAt tests', () => {
    test('insertAt', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAt(0, 10, 20);
      expect(list.at(0).value).toBe(10);
    });
    test('insertAt when index is out of range', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.insertAt(99, 10, 20)).toThrow(RangeError);
    });
    test('insertAt when list is empty', () => {
      expect(() => list.insertAt(99, 10, 20)).toThrow(RangeError);
    });
  });

  describe('removeAt tests', () => {
    test('removeAt', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(0);
      expect(list.at(0).value).toBe(2);
    });
    test('removeAt when index is out of bounds', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(() => list.removeAt(99)).toThrow(RangeError);
    });
    test('removeAt when list is empty', () => {
      expect(() => list.removeAt(0)).toThrow(RangeError);
    });
  });
});
