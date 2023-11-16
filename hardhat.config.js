module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.7.6",
            }
        ],
    },
    networks: {
        hardhat: {
            chainId: 1337,
            allowUnlimitedContractSize: true
        },
    },
};