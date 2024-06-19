# ErrorOr PHP Library

This PHP library provides a way to handle results that can either be a value or an error, similar to the `ErrorOr` pattern in other languages. This is particularly useful for methods that can fail, allowing you to handle errors and successful results in a unified way.

## Installation

You can install the library using Composer. Run the following command in your project's root directory:

```bash
composer require carlosupreme/error-or
```

## Usage

### Error Class

The `Error` class represents different types of errors that can occur.

#### Creating an Error

You can create errors using static methods on the `Error` class:

```php
use Carlosupreme\ErrorOr\Error;

// Creating a failure error
$error = Error::failure();

// Creating an unexpected error
$error = Error::unexpected();

// Creating a validation error
$error = Error::validation('validation_code', 'Validation failed.');
```

#### Checking Error Details

```php
echo $error->getCode();         // Outputs the error code
echo $error->getDescription();  // Outputs the error description
echo $error->getType();         // Outputs the error type
```

### ErrorOr Class

The `ErrorOr` class is used to represent a result that can either be a value or an error.

#### Creating an ErrorOr

You can create an `ErrorOr` instance from a value or from one or more errors:

```php
use Carlosupreme\ErrorOr\ErrorOr;

// From a value
$result = ErrorOr::fromValue('some value');

// From a single error
$errorResult = ErrorOr::fromError($error);

// From multiple errors
$multiErrorResult = ErrorOr::fromErrors($error1, $error2);
```

#### Handling the Result

You can check whether the result is an error and access the value or errors accordingly:

```php
if ($result->isError()) {
    $errors = $result->getErrors();
    $firstError = $result->getFirstError();
} else {
    $value = $result->getValue();
}
```

## Tests

To run the tests, use the following command:

```bash
vendor/bin/phpunit tests
```

## Credits

This library is inspired by [amantinband's ErrorOr](https://github.com/amantinband/error-or). The original implementation in C# can be found [here](https://github.com/amantinband/error-or).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


This README provides an overview of the library, usage examples, instructions for running tests, and credits to the original author. Adjust the installation section and other parts as needed based on your actual project setup.