require("@nomiclabs/hardhat-waffle");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/eth_holesky/";
const NEXT_PUBLIC_PRIVATE_KEY = "a8cd01a9ff64357c041fa818160a01054d6e4a8e89ed3560a1eddff4bf17fa7b";

// module.exports = {
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 1000,
//       },
//     },
//   },
//   networks: {
//     hardhat: {
//       chainId: 31337,
//     },
//   },
// };

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    holesky: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      gas: 12000000,
    },
  },
};
