require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/YOUR_API_KEY`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
