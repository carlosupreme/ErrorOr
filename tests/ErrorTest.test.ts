import {describe, expect, it} from "vitest";
import {CustomError, ErrorType} from "../src";

describe('Error', () => {

    it('should create a failure error', () => {
        const error = CustomError.failure();
        expect('failure').toEqual(error.getCode());
        expect('An error has occurred.').toEqual(error.getDescription());
        expect(ErrorType.failure).toEqual(error.getType());
    })

    it('should create an unexpected error', () => {
        const error = CustomError.unexpected();
        expect('unexpected').toEqual(error.getCode());
        expect('An unexpected error has occurred.').toEqual(error.getDescription());
        expect(ErrorType.unexpected).toEqual(error.getType());
    })

    it('should create a notFound error', () => {
        const error = CustomError.notFound();
        expect('notFound').toEqual(error.getCode());
        expect('The requested resource was not found.').toEqual(error.getDescription());
        expect(ErrorType.notFound).toEqual(error.getType());
    })

    it('should create a forbidden error', () => {
        const error = CustomError.forbidden();
        expect('forbidden').toEqual(error.getCode());
        expect('You do not have permission to access this resource.').toEqual(error.getDescription());
        expect(ErrorType.forbidden).toEqual(error.getType());
    })

    it('should create a custom error', () => {
        const error = CustomError.custom({
            code: 'customCode',
            description: 'customDescription',
            type: ErrorType.validation
        });

        expect('customCode').toEqual(error.getCode());
        expect('customDescription').toEqual(error.getDescription());
        expect(ErrorType.validation).toEqual(error.getType());
    })

    it('should validate equality of errors', () => {
        const error1 = CustomError.failure('code1', 'description1');
        const error2 = CustomError.failure('code1', 'description1');
        expect(error1.equals(error2)).toBe(true);
    })

    it('should validate inequality of errors', () => {
        const error1 = CustomError.failure('code1', 'description1');
        const error2 = CustomError.failure('code2', 'description1');
        expect(error1.equals(error2)).toBe(false);
    })

});