const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("ivory object galaxy garbage fiction level cruise swim pluck domain collect load", "https://rinkeby.infura.io/v3/c0c2ccd635d44b6cb9da57c72299cabc")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
     solc: {
       version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};