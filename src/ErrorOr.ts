import { CustomError } from "./CustomError";

export class ErrorOr<T> {
    private readonly value?: T;
    private readonly errors?: CustomError[];

    private constructor(value?: T, ...errors: CustomError[]) {
        this.value = value;
        this.errors = errors;
    }

    static success<T>(value: T): ErrorOr<T> {
        if (value === null) {
            throw new Error('Value cannot be null.');
        }

        return new ErrorOr<T>(value);
    }

    static failure<T>(...errors: CustomError[]): ErrorOr<T> {
        return new ErrorOr<T>(undefined, ...errors);
    }

    getValue(): T {
        if (this.isError()) {
            throw new Error('Value cannot be accessed when there are errors.');
        }

        return this.value!;
    }

    isError(): boolean {
        return this.errors !== undefined && this.errors.length > 0;
    }

    getErrors(): CustomError[] {
        if (!this.isError()) {
            return [];
        }

        return this.errors!;
    }

    getFirstError(): CustomError | null {
        if (!this.isError()) {
            return null;
        }

        return this.errors![0];
    }

}