// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud=await CRUD.deploy();
  await crud.deployed();
  const reponse =await crud.create(
    "Yugank","Yver123@gmail.com",21,"0x575864657D2cCBf5B30a44Ca14E335d5076ff1c0"
  );
  await crud.create("avinash","avi123@gmail.com",22,"0x575864657D2cCBf5B30a44Ca14E335d5076ff1c0");
  await crud.create("Nikhil","nik123@gmail.com",22,"0x575864657D2cCBf5B30a44Ca14E335d5076ff1c0");
  //Calling Employees array stored in contract. 
  //const EmpArr=[];
  // const totalNEmp3= await crud.totalEmp();
  // for(let i=0;i<totalNEmp3;i++){
  //   EmpArr[i]= await crud.empl(i);
  //   console.log(EmpArr[i]);
  // } 

  await crud.updateEmployee("Communiti", "Yver123@gmail.com",22);
  // Updated array of array
  //  const EmpArr=[];
  // const totalNEmp3= await crud.totalEmp();
  // for(let i=0;i<totalNEmp3;i++){
  //   EmpArr[i]= await crud.empl(i);
  //   console.log(EmpArr[i]);
  // } 
    

  await crud.deleteEmp("Yver123@gmail.com");
  // Array after deletion on employee.
  const EmpArr=[];
  const totalNEmp3= await crud.totalEmp();
  for(let i=0;i<totalNEmp3;i++){
    EmpArr[i]= await crud.empl(i);
    console.log(EmpArr[i]);
  }
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
