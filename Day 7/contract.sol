// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    address public owner;

    event CountChanged(uint256 newCount);
    event CounterReset(uint256 oldCount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can reset the counter");
        _;
    }

    constructor(uint256 _initialCount) {
        owner = msg.sender;
        count = _initialCount;
    }

    function increment() public {
        count += 1;
        emit CountChanged(count);
    }

    function decrement() public {
        require(count > 0, "Counter cannot be negative");
        count -= 1;
        emit CountChanged(count);
    }

    function incrementBy(uint256 _step) public {
        require(_step > 0, "Step must be greater than zero");
        count += _step;
        emit CountChanged(count);
    }

    function decrementBy(uint256 _step) public {
        require(_step > 0, "Step must be greater than zero");
        require(count >= _step, "Counter cannot be negative");
        count -= _step;
        emit CountChanged(count);
    }

    function resetCounter() public onlyOwner {
        uint256 oldCount = count;
        count = 0;
        emit CounterReset(oldCount);
    }
}
