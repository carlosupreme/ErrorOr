<?php

declare(strict_types=1);

namespace Carlosupreme\ErrorOr;

use InvalidArgumentException;
use RuntimeException;

final class ErrorOr
{
    private mixed $value;
    private ?array $errors;

    private function __construct(mixed $value = null, array $errors = null)
    {
        $this->value = $value;
        $this->errors = $errors;
    }

    public static function fromValue(mixed $value): self
    {
        if (is_null($value)) {
            throw new InvalidArgumentException('Value cannot be null.');
        }

        return new self($value);
    }

    public static function fromError(Error $error): self
    {
        return new self(null, [$error]);
    }

    public static function fromErrors(Error ...$errors): self
    {
        if (empty($errors)) {
            throw new InvalidArgumentException('Provide at least one error.');
        }

        return new self(null, $errors);
    }

    public function isError(): bool
    {
        return !is_null($this->errors);
    }

    public function getErrors(): array
    {
        return $this->isError() ? $this->errors : [];
    }

    public function getValue(): mixed
    {
        if ($this->isError()) {
            throw new RuntimeException('Check isError before accessing getValue.');
        }

        return $this->value;
    }

    public function getFirstError(): Error
    {
        if (!$this->isError()) {
            throw new RuntimeException('Check isError before accessing getFirstError.');
        }

        return $this->errors[0];
    }
}