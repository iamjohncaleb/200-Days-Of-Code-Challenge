// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract LiquidityPool {
    IERC20 public tokenA;
    IERC20 public tokenB;
    mapping(address => uint256) public liquidity;

    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB);
    event Swapped(address indexed trader, uint256 amountIn, uint256 amountOut);

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(uint256 amountA, uint256 amountB) public {
        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transferFrom(msg.sender, address(this), amountB);
        liquidity[msg.sender] += amountA + amountB;
        emit LiquidityAdded(msg.sender, amountA, amountB);
    }

    function swap(address fromToken, uint256 amountIn) public {
        require(fromToken == address(tokenA) || fromToken == address(tokenB), "Invalid token");

        address toToken = (fromToken == address(tokenA)) ? address(tokenB) : address(tokenA);
        IERC20 from = IERC20(fromToken);
        IERC20 to = IERC20(toToken);

        uint256 reserveIn = from.balanceOf(address(this));
        uint256 reserveOut = to.balanceOf(address(this));

        uint256 amountOut = (amountIn * reserveOut) / (reserveIn + amountIn);
        require(amountOut > 0, "Insufficient output");

        from.transferFrom(msg.sender, address(this), amountIn);
        to.transfer(msg.sender, amountOut);

        emit Swapped(msg.sender, amountIn, amountOut);
    }
}