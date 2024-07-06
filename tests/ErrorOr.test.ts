import {describe, it, expect} from 'vitest';
import ErrorOr, {CustomError} from '../src';

describe('ErrorOr', () => {
    it('fromValue should not have errors', () => {
        const value = 'test';
        const result = ErrorOr.success(value);
        expect(result.isError()).toBe(false);
        expect(result.getValue()).toBe(value);
    });

    it('fromError should have an error', () => {
        const error = CustomError.failure();
        const result = ErrorOr.error(error);
        expect(result.isError()).toBe(true);
        expect(result.getErrors()).toEqual([error]);
    });

    it('fromErrors should have multiple errors', () => {
        const error1 = CustomError.failure();
        const error2 = CustomError.unexpected();
        const result = ErrorOr.fromErrors(error1, error2);
        expect(result.isError()).toBe(true);
        expect(result.getErrors()).toEqual([error1, error2]);
    });

    it('getValue should throw an exception when there is an error', () => {
        const error = CustomError.failure();
        const result = ErrorOr.error(error);
        expect(() => result.getValue()).toThrow('Value cannot be accessed when there are errors.');
    });

    it('getFirstError should return the first error', () => {
        const error = CustomError.failure();
        const result = ErrorOr.error(error);
        expect(result.getErrors()?.[0]).toEqual(error);
    });
});