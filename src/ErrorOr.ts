import {CustomError} from "./CustomError";

export class ErrorOr<T> {
    private constructor(
        private value: T | null = null,
        private errors: CustomError[] | null = null) {
    }

    public static success<T>(value: T): ErrorOr<T> {
        if (value === null) {
            throw new Error('Value cannot be null.');
        }

        return new ErrorOr<T>(value);
    }

    public static error(error: CustomError): ErrorOr<null> {
        return new ErrorOr<null>(null, [error]);
    }

    public static fromErrors(...errors: CustomError[]): ErrorOr<null> {
        if (errors.length === 0) {
            throw new Error('Provide at least one error.');
        }

        return new ErrorOr<null>(null, errors);
    }

    public getValue(): T {
        if (this.isError()) {
            throw new Error('Value cannot be accessed when there are errors.');
        }

        return this.value!;
    }

    public getErrors(): CustomError[] | null {
        return this.errors;
    }

    public hasValue(): boolean {
        return this.value !== null;
    }

    public isError(): boolean {
        return this.errors !== null && this.errors.length > 0;
    }

    public isOk(): boolean {
        return this.hasValue() && !this.isError();
    }

    public getFirstError(): CustomError | null {
        if (!this.isError()) {
            return null;
        }

        return this.errors![0];
    }

}