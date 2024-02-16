const hre = require("hardhat");
require('dotenv').config();


async function main() {
    const Token = await hre.ethers.getContractFactory('SimpleStorage');
    const token = Token.attach(process.env.CONTRACT_ADDRESS);

    await token.set(55);
}

main();