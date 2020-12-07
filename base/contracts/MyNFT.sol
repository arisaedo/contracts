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
    // @returns (uint256) tokenID
    function mintToken() public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);

        tokenHolder[msg.sender] = newTokenId;

        return newTokenId;
    }

    // get balance of NFT tokens, owned by caller
    // @returns (uint256) balance
    function getBalanceOf() public view returns (uint256) {
        uint256 balance = balanceOf(msg.sender);
        return balance;
    }

    // get owner of token
    // @param (uint256) tokenId - ID of token
    // @returns (uint256) address - owner of tokenId
    function ownerOfToken(uint256 _tokenId) public view returns (address) {
        address owner = ownerOf(_tokenId);
        return owner;
    }

    // transfer token
    // @param (address) from - transfer token from address
    // @param (address) to - transfer token to address
    // @param (address) tokenId - token ID of token
    function transferToken(address _from, address _to, uint256 tokenId) public {
        safeTransferFrom(_from, _to, tokenId);
    }
}
