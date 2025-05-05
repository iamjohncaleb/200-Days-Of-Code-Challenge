// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract AgriCrowdFunding {
    struct Campaign {
        uint256 id;
        address payable creator;
        string title;
        string description;
        uint256 goal;
        uint256 pledged;
        uint256 deadline;
        bool claimed;
    }

    uint256 public campaignCount;
    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => uint256)) public contributions;

    event CampaignCreated(uint256 id, address creator, uint256 goal, uint256 deadline);
    event Funded(uint256 id, address contributor, uint256 amount);
    event Claimed(uint256 id);
    event Refunded(uint256 id, address contributor, uint256 amount);

    function createCampaign(string memory _title, string memory _description, uint256 _goal, uint256 _duration) external {
        require(_goal > 0, "Goal must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");

        campaignCount++;
        campaigns[campaignCount] = Campaign({
            id: campaignCount,
            creator: payable(msg.sender),
            title: _title,
            description: _description,
            goal: _goal,
            pledged: 0,
            deadline: block.timestamp + _duration,
            claimed: false
        });

        emit CampaignCreated(campaignCount, msg.sender, _goal, block.timestamp + _duration);
    }

    function fundCampaign(uint256 _id) external payable {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp < campaign.deadline, "Campaign ended");
        require(msg.value > 0, "Must send funds");

        campaign.pledged += msg.value;
        contributions[_id][msg.sender] += msg.value;

        emit Funded(_id, msg.sender, msg.value);
    }

    function claimFunds(uint256 _id) external {
        Campaign storage campaign = campaigns[_id];
        require(msg.sender == campaign.creator, "Not creator");
        require(block.timestamp >= campaign.deadline, "Too early");
        require(campaign.pledged >= campaign.goal, "Goal not met");
        require(!campaign.claimed, "Already claimed");

        campaign.claimed = true;
        campaign.creator.transfer(campaign.pledged);

        emit Claimed(_id);
    }

    function refund(uint256 _id) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp >= campaign.deadline, "Too early");
        require(campaign.pledged < campaign.goal, "Goal met");

        uint256 amount = contributions[_id][msg.sender];
        require(amount > 0, "No contribution");

        contributions[_id][msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit Refunded(_id, msg.sender, amount);
    }

    function getCampaign(uint256 _id) public view returns (Campaign memory) {
        return campaigns[_id];
    }
}
