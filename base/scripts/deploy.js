// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat"); // unused atm. usage e.g: const Greeter = await hre.ethers.getContractFactory("Greeter");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const game = await deployGameItem()
  const accounts = await ethers.provider.listAccounts();
}

const deployGameItem = async () => {
  const GameItem = await ethers.getContractFactory("GameItem")
  console.log("Deploying GameItem...");
  const game = await GameItem.deploy();
  await game .deployed();
  console.log("GameItem deployed to:", game.address);
  return game
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
