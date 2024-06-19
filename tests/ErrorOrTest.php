<?php

use PHPUnit\Framework\TestCase;
use Carlosupreme\ErrorOr\Error;
use Carlosupreme\ErrorOr\ErrorOr;
use Carlosupreme\ErrorOr\ErrorType;

class ErrorOrTest extends TestCase
{
    public function testFromValue(): void
    {
        $value = 'test';
        $result = ErrorOr::fromValue($value);
        $this->assertFalse($result->isError());
        $this->assertEquals($value, $result->getValue());
    }

    public function testFromError(): void
    {
        $error = Error::failure();
        $result = ErrorOr::fromError($error);
        $this->assertTrue($result->isError());
        $this->assertEquals([$error], $result->getErrors());
    }

    public function testFromErrors(): void
    {
        $error1 = Error::failure();
        $error2 = Error::unexpected();
        $result = ErrorOr::fromErrors($error1, $error2);
        $this->assertTrue($result->isError());
        $this->assertEquals([$error1, $error2], $result->getErrors());
    }

    public function testGetValueThrowsExceptionWhenIsError(): void
    {
        $this->expectException(RuntimeException::class);
        $error = Error::failure();
        $result = ErrorOr::fromError($error);
        $result->getValue();
    }

    public function testGetFirstError(): void
    {
        $error = Error::failure();
        $result = ErrorOr::fromError($error);
        $this->assertEquals($error, $result->getFirstError());
    }
}
