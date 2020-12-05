pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract MyNFT is ERC721 {
    // counter for token ID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // map address to token ID
    mapping (address => uint256) internal tokenHolder;

    constructor() ERC721("MyNFT", "NFT") public {}

    // mint token, owned by caller
    // @returns tokenID
    function mintToken() public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);

        tokenHolder[msg.sender] = newTokenId;

        return newTokenId;
    }

    function getBalanceOf() public view returns (uint256) {
        uint256 balance = balanceOf(msg.sender);

        return balance;
    }

    function ownerOfToken(uint256 tokenIndex) public v returns (address) {
        uint tokenId = tokenByIndex(tokenIndex);
        address owner = ownerOf(tokenId);

        return owner;
    }

}
