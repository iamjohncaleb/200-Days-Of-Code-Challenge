require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.20",
    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY",
            accounts: ["YOUR_PRIVATE_KEY"]
        }
    }
};