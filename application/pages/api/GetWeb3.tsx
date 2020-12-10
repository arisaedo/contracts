import { ethers } from "ethers"
import React, { MouseEvent, FunctionComponent } from "react"

export default function GetWeb3(): any {
  async function handleClick(e: MouseEvent) {
    e.preventDefault();

    let provider: any = new ethers.providers.Web3Provider(window.ethereum);
    console.log("Block number: ", await provider.getBlockNumber())

    let accounts: Array<String> = await provider.listAccounts()
    console.log("Accounts: ", accounts)

    let balance: BigInteger = await provider.getBalance(accounts[0])
    console.log("Ether balance: ", ethers.utils.formatEther(balance))

  }
  return (
    <button onClick={handleClick}>Get Web3</button>
  )
}
