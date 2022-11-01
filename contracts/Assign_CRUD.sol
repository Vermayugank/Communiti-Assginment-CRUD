//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract CRUD{

    struct employee{
        string name;
        string email;
        uint256 age;
        address accountAddress;
    }

    employee[] public empl;
    uint256 public totalEmp;

    constructor(){
        totalEmp=0;
    }

    function create(string memory n, string memory email, uint256 a, address wallet ) public returns(uint256 _totalEmp){
        employee memory newEmployee=employee(n,email,a,wallet);
        empl.push(newEmployee);
        totalEmp++;
        return totalEmp;
    }

    function updateEmployee(string memory n, string memory email, uint256 a) external returns (bool){
        for(uint i=0;i<totalEmp;i++){
            if(compareStrings(empl[i].email, email)){
                empl[i].name=n;
                empl[i].age=a;
                return true;
            }
        }
        return false;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function deleteEmp(string memory emailToRemove) external returns (bool){
        for(uint i=0;i<totalEmp;i++){
            if(compareStrings(empl[i].email, emailToRemove)){
                empl[i]=empl[totalEmp-1];
                delete empl[totalEmp-1];
                totalEmp--;
                return true;
                
            }
        }
        return false;
    }
}