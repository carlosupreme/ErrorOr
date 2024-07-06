import {describe, it, expect} from 'vitest';
import {ErrorType} from '../src';

describe('ErrorTypeTest', () => {
    it('testErrorTypeValues', () => {
        expect(ErrorType.failure).toBe('failure');
        expect(ErrorType.unexpected).toBe('unexpected');
        expect(ErrorType.validation).toBe('validation');
        expect(ErrorType.conflict).toBe('conflict');
        expect(ErrorType.notFound).toBe('notFound');
        expect(ErrorType.unauthorized).toBe('unauthorized');
        expect(ErrorType.forbidden).toBe('forbidden');
    });

    it('testErrorTypeIsEnum', () => {
        expect(typeof ErrorType.failure).toBe('string');
        expect(typeof ErrorType.unexpected).toBe('string');
        expect(typeof ErrorType.validation).toBe('string');
        expect(typeof ErrorType.conflict).toBe('string');
        expect(typeof ErrorType.notFound).toBe('string');
        expect(typeof ErrorType.unauthorized).toBe('string');
        expect(typeof ErrorType.forbidden).toBe('string');
    });
});