<?php

use PHPUnit\Framework\TestCase;
use Carlosupreme\ErrorOr\Error;
use Carlosupreme\ErrorOr\ErrorType;

class ErrorTest extends TestCase
{
    public function testFailureErrorCreation(): void
    {
        $error = Error::failure();
        $this->assertEquals('failure', $error->getCode());
        $this->assertEquals('An error has occurred.', $error->getDescription());
        $this->assertEquals(ErrorType::failure, $error->getType());
    }

    public function testUnexpectedErrorCreation(): void
    {
        $error = Error::unexpected();
        $this->assertEquals('unexpected', $error->getCode());
        $this->assertEquals('An unexpected error has occurred.', $error->getDescription());
        $this->assertEquals(ErrorType::unexpected, $error->getType());
    }

    public function testCustomErrorCreation(): void
    {
        $error = Error::custom(ErrorType::conflict, 'custom_code', 'Custom description');
        $this->assertEquals('custom_code', $error->getCode());
        $this->assertEquals('Custom description', $error->getDescription());
        $this->assertEquals(ErrorType::conflict, $error->getType());
    }

    public function testErrorEquality(): void
    {
        $error1 = Error::failure('code1', 'description1');
        $error2 = Error::failure('code1', 'description1');
        $this->assertTrue($error1->equals($error2));
    }

    public function testErrorInequality(): void
    {
        $error1 = Error::failure('code1', 'description1');
        $error2 = Error::failure('code2', 'description2');
        $this->assertFalse($error1->equals($error2));
    }
}
