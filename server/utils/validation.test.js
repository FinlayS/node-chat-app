const expect = require('expect');

var {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(123, 123)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('  ', 'valid')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString('  fin  ')).toBe(true);
    });
});
