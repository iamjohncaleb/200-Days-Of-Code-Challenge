// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract EquipmentLeasing {
    address public owner;

    struct Lease {
        address lessee;
        string equipmentName;
        uint256 durationDays;
        uint256 amountPaid;
        bool active;
    }

    uint256 public leaseCount;
    mapping(uint256 => Lease) public leases;

    event EquipmentLeased(uint256 leaseId, address indexed lessee, string equipmentName);
    event LeaseTerminated(uint256 leaseId);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function leaseEquipment(string memory _equipmentName, uint256 _durationDays) external payable {
        require(msg.value > 0, "Payment required");

        leaseCount++;
        leases[leaseCount] = Lease({
            lessee: msg.sender,
            equipmentName: _equipmentName,
            durationDays: _durationDays,
            amountPaid: msg.value,
            active: true
        });

        emit EquipmentLeased(leaseCount, msg.sender, _equipmentName);
    }

    function terminateLease(uint256 leaseId) external onlyOwner {
        require(leases[leaseId].active, "Lease not active");
        leases[leaseId].active = false;
        emit LeaseTerminated(leaseId);
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}