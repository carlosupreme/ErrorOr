<?php

use PHPUnit\Framework\TestCase;
use Carlosupreme\ErrorOr\ErrorType;

class ErrorTypeTest extends TestCase
{
    public function testErrorTypeValues(): void
    {
        $this->assertEquals('failure', ErrorType::failure->value);
        $this->assertEquals('unexpected', ErrorType::unexpected->value);
        $this->assertEquals('validation', ErrorType::validation->value);
        $this->assertEquals('conflict', ErrorType::conflict->value);
        $this->assertEquals('notFound', ErrorType::notFound->value);
        $this->assertEquals('unauthorized', ErrorType::unauthorized->value);
        $this->assertEquals('forbidden', ErrorType::forbidden->value);
    }

    public function testErrorTypeIsEnum(): void
    {
        $this->assertInstanceOf(UnitEnum::class, ErrorType::failure);
    }
}
