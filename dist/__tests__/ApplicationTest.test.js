import { describe, expect, test } from '@jest/globals';
import { comma, uncomma } from '../script/addProduct';
describe('addProduct', function () {
    test('makeComma', function () {
        expect(comma('12345')).toBe('12,345');
    });
    test('deleteComma', function () {
        expect(uncomma('12,345')).toBe('12345');
    });
});
