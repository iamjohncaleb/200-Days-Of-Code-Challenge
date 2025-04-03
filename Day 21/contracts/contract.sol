// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TwitterSmartContract {
    struct Tweet {
        address author;
        string content;
        uint256 timestamp;
    }

    Tweet[] public tweets;
    mapping(address => uint256) public userTweetCount;

    event TweetCreated(address indexed author, string content, uint256 timestamp);

    function postTweet(string memory _content) public {
        require(bytes(_content).length > 0, "Tweet cannot be empty");
        tweets.push(Tweet(msg.sender, _content, block.timestamp));
        userTweetCount[msg.sender]++;
        emit TweetCreated(msg.sender, _content, block.timestamp);
    }

    function getTweets() public view returns (Tweet[] memory) {
        return tweets;
    }
}