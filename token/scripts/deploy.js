async function main () {
  // get contract to deploy
  const MyNFT = await ethers.getContractFactory('MyNFT')
  console.log('Deploying my NFT')
  const nft = await MyNFT.deploy()
  await nft.deployed()
  console.log('MyNFT deployed to', nft.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
