// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChainTraceability {

    struct Product {
        uint256 productId;
        string name;
        string origin;
        uint256 timestamp;
        string[] statusHistory;
        bool exists;
    }

    address public owner;
    uint256 public productCount;
    mapping(uint256 => Product) public products;

    event ProductCreated(uint256 indexed productId, string name, string origin);
    event ProductStatusUpdated(uint256 indexed productId, string newStatus);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
        productCount = 0;
    }

    // Create a new product in the supply chain
    function createProduct(string memory _name, string memory _origin) external onlyOwner {
        productCount++;
        products[productCount] = Product({
            productId: productCount,
            name: _name,
            origin: _origin,
            timestamp: block.timestamp,
            statusHistory: new string ,
            exists: true
        });

        emit ProductCreated(productCount, _name, _origin);
    }

    // Update the status of a product
    function updateProductStatus(uint256 _productId, string memory _status) external {
        require(products[_productId].exists, "Product does not exist");
        products[_productId].statusHistory.push(_status);
        emit ProductStatusUpdated(_productId, _status);
    }

    // Get the details of a product
    function getProduct(uint256 _productId) external view returns (Product memory) {
        require(products[_productId].exists, "Product does not exist");
        return products[_productId];
    }

    // Get the status history of a product
    function getProductStatusHistory(uint256 _productId) external view returns (string[] memory) {
        require(products[_productId].exists, "Product does not exist");
        return products[_productId].statusHistory;
    }
}
