const { expect } = require('chai')

// start test block
describe('GameItem Token', function () {
  // get contract instance
  before(async function () {
    this.GameItem = await ethers.getContractFactory('GameItem')
  })

  // deploy contract before each test case
  beforeEach(async function () {
    this.game = await this.GameItem.deploy()
    await this.game.deployed()
  })

  // test case 1
  it('does owner who minted the new token actually own the token', async function () {
    // owner mints the token and returns token ID
    await this.game.awardItem('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 'https://game.example/item-id-8u5h2m.json')

    // expect that the same token ID (1) is owned by
    // the same address that called the mint fuction
    expect((await this.game.ownerOf(1)).toLowerCase()).to.equal('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
  })

  // test case 2
  it('can transfer token to new owner', async function () {
    // first mint token
    const res = await this.game.awardItem('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 'https://game.example/item-id-8u5h2m.json')

    // transfer token
    await this.game.transferToken('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 1)

    // expect that new owner is the owner ('to' address) of the token transferred
    expect((await this.game.ownerOf(1)).toLowerCase()).to.equal('0x70997970c51812dc3a010c7d01b50e0d17dc79c8')
  })
})
