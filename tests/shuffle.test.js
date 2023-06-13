import { test, expect, describe } from '@jest/globals';
import shuffle from 'src/js';

describe("shuffle", () => {
    test("should shuffle an array", () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffledArr = shuffle([...arr]);
      expect(shuffledArr).not.toEqual(arr);
      expect(shuffledArr.sort()).toEqual(arr.sort());
    });
});