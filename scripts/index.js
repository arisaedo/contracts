async function main () {
  // Our code will go here
  const MyNFT = await ethers.getContractFactory('MyNFT')
  const nft = await MyNFT.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3')

  // mint token
  await nft.mintToken()
  console.log('Token minted!')

  // get balance of tokens from owner (caller)
  const balance = await nft.getBalanceOf()
  console.log('Balance: ', balance.toNumber())

  // get owner of token
  const owner = await nft.ownerOfToken(0)
  console.log('Owner: ', owner)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
