// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarbonCreditTrading {
    struct Credit {
        uint256 id;
        address issuer;
        uint256 amount;
        bool verified;
        bool traded;
    }

    address public verifier;
    uint256 public creditCount;
    mapping(uint256 => Credit) public credits;

    event CreditIssued(uint256 indexed id, address issuer, uint256 amount);
    event CreditVerified(uint256 indexed id);
    event CreditTraded(uint256 indexed id, address buyer);

    constructor() {
        verifier = msg.sender;
    }

    modifier onlyVerifier() {
        require(msg.sender == verifier, "Only verifier can perform this action");
        _;
    }

    function issueCredit(uint256 amount) external {
        creditCount++;
        credits[creditCount] = Credit(creditCount, msg.sender, amount, false, false);
        emit CreditIssued(creditCount, msg.sender, amount);
    }

    function verifyCredit(uint256 id) external onlyVerifier {
        require(credits[id].id != 0, "Credit does not exist");
        credits[id].verified = true;
        emit CreditVerified(id);
    }

    function tradeCredit(uint256 id, address buyer) external {
        Credit storage credit = credits[id];
        require(credit.id != 0, "Credit does not exist");
        require(credit.issuer == msg.sender, "Only issuer can trade");
        require(credit.verified, "Credit not verified");
        require(!credit.traded, "Credit already traded");

        credit.traded = true;
        credit.issuer = buyer;

        emit CreditTraded(id, buyer);
    }

    function getCredit(uint256 id) external view returns (Credit memory) {
        require(credits[id].id != 0, "Credit does not exist");
        return credits[id];
    }
}
