import { describe, test, expect } from '@jest/globals';
import { merge } from '../src/merge';

describe('merge', () => {
  test('merges three sorted arrays into one ascending array', () => {
    const c1 = [1, 4, 7];
    const c2 = [2, 5, 8, 9];
    const c3 = [10, 6, 3]; 
    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('works with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);

    const c1 = [1, 3, 5];
    const c2: number[] = [];
    const c3 = [6, 4, 2]; 

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('handles duplicates correctly', () => {
    const c1 = [1, 2, 2];
    const c2 = [2, 3];
    const c3 = [4, 3, 2]; 

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 2, 2, 2, 3, 3, 4]);
  });
});
