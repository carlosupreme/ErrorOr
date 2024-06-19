<?php

namespace Carlosupreme\ErrorOr;

enum ErrorType: string
{
    case failure = 'failure';
    case unexpected = 'unexpected';
    case validation = 'validation';
    case conflict = 'conflict';
    case notFound = 'notFound';
    case unauthorized = 'unauthorized';
    case forbidden = 'forbidden';
}