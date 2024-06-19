<?php

namespace Carlosupreme\ErrorOr;

final class Error
{
    private string $code;
    private string $description;
    private ErrorType $type;

    private function __construct(string $code, string $description, ErrorType $type)
    {
        $this->code = $code;
        $this->description = $description;
        $this->type = $type;
    }

    public static function failure(
        string $code = 'failure',
        string $description = 'An error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::failure);
    }

    public static function unexpected(
        string $code = 'unexpected',
        string $description = 'An unexpected error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::unexpected);
    }

    public static function validation(
        string $code = 'validation',
        string $description = 'A validation error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::validation);
    }

    public static function conflict(
        string $code = 'Conflict',
        string $description = 'A conflict error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::conflict);
    }

    public static function notFound(
        string $code = 'notFound',
        string $description = 'A "Not Found" error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::notFound);
    }

    public static function unauthorized(
        string $code = 'unauthorized',
        string $description = 'An "Unauthorized" error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::unauthorized);
    }

    public static function forbidden(
        string $code = 'forbidden',
        string $description = 'A "Forbidden" error has occurred.'
    ): self
    {
        return new self($code, $description, ErrorType::forbidden);
    }

    public static function custom(
        ErrorType $type,
        string    $code,
        string    $description
    ): self
    {
        return new self($code, $description, $type);
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getType(): ErrorType
    {
        return $this->type;
    }

    public function equals(Error $that): bool
    {
        return
            $this->type === $that->type &&
            $this->code === $that->code &&
            $this->description === $that->description;
    }
}
