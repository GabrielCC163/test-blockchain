require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
const { QUICKNODE_API_KEY, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    polygonMumbai: {
      url: `https://autumn-old-pallet.matic-testnet.quiknode.pro/${QUICKNODE_API_KEY}/`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.4",
};