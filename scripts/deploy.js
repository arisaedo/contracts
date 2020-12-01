async function main () {
  // get contract to deploy
  const GameItem = await ethers.getContractFactory('GameItem')
  console.log('Deploying game')
  const game = await GameItem.deploy()
  await game.deployed()
  console.log('GameItem deployed to', game.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
