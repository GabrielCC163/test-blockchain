// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.12 <0.9.0;

contract SimpleStorage {
    uint storedData;
    
    function set(uint x) public {
        storedData = x;
    }
    function get() public view returns (uint) {
        return storedData;
    }
}