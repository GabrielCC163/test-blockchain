const hre = require("hardhat");
require('dotenv').config();


async function main() {
    const Token = await hre.ethers.getContractFactory('SimpleStorage');
    const token = Token.attach(process.env.CONTRACT_ADDRESS);

    const value = await token.get();
    console.log(value.toString());
}

main();