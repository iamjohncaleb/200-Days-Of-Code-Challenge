// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    event CalculationPerformed(string operation, uint256 operand1, uint256 operand2, uint256 result);

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        uint256 result = a + b;
        require(result >= a, "Overflow error"); // Prevents overflow
        return result;
    }

    function subtract(uint256 a, uint256 b) public pure returns (uint256) {
        require(a >= b, "Underflow error"); // Prevents negative results in unsigned integers
        return a - b;
    }

    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        if (a == 0 || b == 0) return 0; // Multiplying by 0 should return 0
        uint256 result = a * b;
        require(result / a == b, "Overflow error"); // Prevents overflow
        return result;
    }

    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        require(b > 0, "Cannot divide by zero");
        return a / b;
    }

    function modulo(uint256 a, uint256 b) public pure returns (uint256) {
        require(b > 0, "Cannot modulo by zero");
        return a % b;
    }

    function power(uint256 base, uint256 exponent) public pure returns (uint256) {
        require(base > 0, "Base must be greater than 0");
        uint256 result = 1;
        for (uint256 i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }

    function sqrt(uint256 x) public pure returns (uint256) {
        if (x == 0 || x == 1) return x;
        uint256 z = (x + 1) / 2;
        uint256 y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }
}
