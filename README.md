# ErrorOr Typescript Library

This Typescript library provides a way to handle results that can either be a value or an error, similar to
the `ErrorOr` pattern in other languages. This is particularly useful for methods that can fail, allowing you to handle
errors and successful results in a unified way.

## Installation

You can install the library using Composer. Run the following command in your project's root directory:

```bash
npm install error-or
```

## Usage

### Error Class

The `Error` class represents different types of errors that can occur.

#### Creating an Error

You can create errors using static methods on the `Error` class:

```ts
import ErrorOr, {CustomError} from 'error-or';

// Creating a failure error
const failureError = CustomError.failure();

// Creating an unexpected error
const unexpectedError = CustomError.unexpected();

// Creating a validation error
const validationError = CustomError.validation(
    'validation_code', 'Validation message.'
);
```

#### Checking Error Details

```ts

const error = CustomError.custom({
    code: 'error_code',
    description: 'Error description.',
    type: 'error_type'
});
// Outputs the error code
console.log(error.getCode());

// Outputs the error description
console.log(error.getDescription());

// Outputs the error type
console.log(error.getType());
```

### ErrorOr Class

The `ErrorOr` class is used to represent a result that can either be a value or an error.

#### Creating an ErrorOr

You can create an `ErrorOr` instance from a value or from one or more errors:

```ts
import ErrorOr, {CustomError} from 'error-or';

// From a value
const result = ErrorOr.success('some value');

// From a single error
const errorResult = ErrorOr.error(Error.failure());

// From multiple errors
const errors = [CustomError.failure(), CustomError.validation()];
const multipleErrorsResult = ErrorOr.fromErrors(errors);
```

#### Handling the Result

You can check whether the result is an error and access the value or errors accordingly:

```ts
if (result.isError()) {
    errors = result.getErrors();
    firstError = result.getFirstError();
} else {
    value = result.getValue();
}
```

## Tests

To run the tests, use the following command:

```bash
npm run test
```

## Credits

This library is inspired by [amantinband's ErrorOr](https://github.com/amantinband/error-or). The original
implementation in C# can be found [here](https://github.com/amantinband/error-or).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

This README provides an overview of the library, usage examples, instructions for running tests, and credits to the
original author. Adjust the installation section and other parts as needed based on your actual project setup.
