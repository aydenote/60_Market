import { describe, expect, test } from '@jest/globals';
import { screen } from '@testing-library/dom';
import { comma, uncomma } from '../script/addProduct';

describe('addProduct', () => {
  test('makeComma', () => {
    expect(comma('12345')).toBe('12,345');
  });
  test('deleteComma', () => {
    expect(uncomma('12,345')).toBe('12345');
  });
});
