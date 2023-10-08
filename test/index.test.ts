const { convertTimeString } = require('../src/main');
const { TimeUnitOutPut } = require('../src/enums');

describe('convertTimeString', () => {
    it('should throw an error for invalid time unit', () => {
        expect(() => convertTimeString('2x')).toThrowError('Invalid time unit: x');
        expect(() => convertTimeString('2abc')).toThrowError('Invalid time unit: abc');
    });

    it('should throw an error for invalid time string', () => {
        expect(() => convertTimeString('abc')).toThrowError('Invalid time string');
        expect(() => convertTimeString('abc1')).toThrowError('Invalid time string');
        expect(() => convertTimeString(null)).toThrowError('Invalid time string');
        expect(() => convertTimeString(undefined)).toThrowError('Invalid time string');
    });

    it('should convert time string to milliseconds', () => {
        expect(convertTimeString('1s')).toBe(1000);
        expect(convertTimeString('1m')).toBe(60000);
        expect(convertTimeString('1h')).toBe(3600000);
        expect(convertTimeString('1d')).toBe(86400000);
        expect(convertTimeString('1w')).toBe(604800000);
        expect(convertTimeString('1M')).toBe(2592000000);
        expect(convertTimeString('1y')).toBe(31536000000);
        expect(convertTimeString('1y', null, true)).toBe(31622400000);

        expect(convertTimeString('1m1s')).toBe(61000);
        expect(convertTimeString('1h1m1s')).toBe(3661000);
        expect(convertTimeString('1d1h1m1s')).toBe(90061000);
        expect(convertTimeString('1w1d1h1m1s')).toBe(694861000);
        expect(convertTimeString('1M1w1d1h1m1s')).toBe(3286861000);
        expect(convertTimeString('1y1M1w1d1h1m1s')).toBe(34822861000);
        expect(convertTimeString('1y1M1w1d1h1m1s', null, true)).toBe(34909261000);
        expect(convertTimeString('1y1d', null, true)).toBe(31708800000);
    });

    it('should convert time string to seconds', () => {
        expect(convertTimeString('1s', TimeUnitOutPut.SECOND)).toBe(1);
        expect(convertTimeString('1m', TimeUnitOutPut.SECOND)).toBe(60);
        expect(convertTimeString('1h', TimeUnitOutPut.SECOND)).toBe(3600);
        expect(convertTimeString('1d', TimeUnitOutPut.SECOND)).toBe(86400);
        expect(convertTimeString('1w', TimeUnitOutPut.SECOND)).toBe(604800);
        expect(convertTimeString('1M', TimeUnitOutPut.SECOND)).toBe(2592000);
        expect(convertTimeString('1y', TimeUnitOutPut.SECOND)).toBe(31536000);
        expect(convertTimeString('1y', TimeUnitOutPut.SECOND, true)).toBe(31622400);

        expect(convertTimeString('1m1s')).toBe(61000);
        expect(convertTimeString('1h1m1s')).toBe(3661000);
        expect(convertTimeString('1d1h1m1s')).toBe(90061000);
        expect(convertTimeString('1w1d1h1m1s')).toBe(694861000);
        expect(convertTimeString('1M1w1d1h1m1s')).toBe(3286861000);
        expect(convertTimeString('1y1M1w1d1h1m1s')).toBe(34822861000);
        expect(convertTimeString('1y1M1w1d1h1m1s', TimeUnitOutPut.SECOND, true)).toBe(34909261);
        expect(convertTimeString('1y1d', TimeUnitOutPut.SECOND, true)).toBe(31708800);
    });
});
