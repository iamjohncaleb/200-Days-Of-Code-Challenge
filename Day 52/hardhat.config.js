require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/YOUR_API_KEY",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
