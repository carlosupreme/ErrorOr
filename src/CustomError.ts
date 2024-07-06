import {ErrorType} from "./ErrorType";

export class CustomError {
    private code: string;
    private description: string;
    private type: ErrorType;

    private constructor(code: string, description: string, type: ErrorType) {
        this.code = code;
        this.description = description;
        this.type = type;
    }

    public static failure(
        code: string = "failure",
        description: string = "An error has occurred."
    ): CustomError {
        return new CustomError(code, description, ErrorType.failure);
    }

    public static unexpected(
        code: string = "unexpected",
        description: string = "An unexpected error has occurred."
    ): CustomError {
        return new CustomError(code, description, ErrorType.unexpected);
    }

    public static validation(
        code: string = "validation",
        description: string = "The request could not be completed due to validation errors."
    ): CustomError {
        return new CustomError(code, description, ErrorType.validation);
    }

    public static conflict(
        code: string = "Conflict",
        description: string = 'The request could not be completed due to a conflict with the current state of the target resource.'
    ): CustomError {
        return new CustomError(code, description, ErrorType.conflict);
    }

    public static notFound(
        code: string = "notFound",
        description: string = 'The requested resource was not found.'
    ): CustomError {
        return new CustomError(code, description, ErrorType.notFound);
    }

    public static unauthorized(
        code: string = "unauthorized",
        description: string = 'You need to bbe authenticated to access this resource.'
    ): CustomError {
        return new CustomError(code, description, ErrorType.unauthorized);
    }

    public static forbidden(
        code: string = "forbidden",
        description: string = 'You do not have permission to access this resource.'
    ): CustomError {
        return new CustomError(code, description, ErrorType.forbidden);
    }

    public static custom({code, description, type}: {
        code: string,
        description: string
        type: ErrorType,
    }): CustomError {
        return new CustomError(code, description, type);
    }

    public getCode(): string {
        return this.code;
    }

    public getDescription(): string {
        return this.description;
    }

    public getType(): ErrorType {
        return this.type;
    }

    public equals(that: CustomError): boolean {
        return (
            this.type === that.type &&
            this.code === that.code &&
            this.description === that.description
        );
    }
}