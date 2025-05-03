// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CommodityFutures {
    enum Status { Open, Closed }

    struct Contract {
        address creator;
        uint256 price;
        uint256 quantity;
        uint256 expiry;
        Status status;
    }

    mapping(uint256 => Contract) public contracts;
    uint256 public contractCount;

    event ContractCreated(uint256 contractId, uint256 price, uint256 quantity, uint256 expiry);
    event ContractClosed(uint256 contractId);
    event ContractTraded(uint256 contractId, uint256 price);

    // Create a new futures contract
    function createContract(uint256 _price, uint256 _quantity, uint256 _expiry) external {
        contractCount++;
        contracts[contractCount] = Contract({
            creator: msg.sender,
            price: _price,
            quantity: _quantity,
            expiry: _expiry,
            status: Status.Open
        });

        emit ContractCreated(contractCount, _price, _quantity, _expiry);
    }

    // Close a futures contract
    function closeContract(uint256 _contractId) external {
        Contract storage _contract = contracts[_contractId];
        require(msg.sender == _contract.creator, "Only the creator can close the contract");
        require(_contract.status == Status.Open, "Contract is already closed");

        _contract.status = Status.Closed;

        emit ContractClosed(_contractId);
    }

    // Trade a futures contract
    function tradeContract(uint256 _contractId, uint256 _price) external {
        Contract storage _contract = contracts[_contractId];
        require(_contract.status == Status.Open, "Contract is closed");
        require(_price >= _contract.price, "Price must be greater than or equal to the contract price");

        emit ContractTraded(_contractId, _price);
    }

    // Get contract details
    function getContract(uint256 _contractId) external view returns (Contract memory) {
        return contracts[_contractId];
    }
}
