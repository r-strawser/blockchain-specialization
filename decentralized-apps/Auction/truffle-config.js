module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
},

compilers: {
  solc: {
    version: "0.4.17",   // Fetch exact version from solc-bin (default: truffle's version)

    settings: {
      evmVersion: "byzantium"
    }
  }
}
};
