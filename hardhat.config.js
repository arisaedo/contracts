/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: {
    compilers: [{
      version: '0.7.3'
    },
    {
      version: '0.5.0'
    }
    ]
  }
}
