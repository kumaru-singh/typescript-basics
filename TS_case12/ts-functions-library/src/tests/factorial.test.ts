import { factorial } from '../math/factorial';

describe('factorial', () => {
    test('should return 1 for n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('should return 1 for n = 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('should return 2 for n = 2', () => {
        expect(factorial(2)).toBe(2);
    });

    test('should return 6 for n = 3', () => {
        expect(factorial(3)).toBe(6);
    });

    test('should return 24 for n = 4', () => {
        expect(factorial(4)).toBe(24);
    });

    test('should return 120 for n = 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('should return 3628800 for n = 10', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('should handle large numbers', () => {
        expect(factorial(15)).toBe(1307674368000);
    });
});