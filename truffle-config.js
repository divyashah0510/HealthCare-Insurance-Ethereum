/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6721975, // Match Ganache's default gas limit
      gasPrice: 20000000000, // 20 gwei
      websockets: true
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",    // Same as your contract pragma
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "london" // Specify EVM version
      }
    }
  }
};
