// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GameItem is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("GameItem", "ITM") {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    // transfer token
    // @param (address) from - transfer token from address
    // @param (address) to - transfer token to address
    // @param (address) tokenId - token ID of token
    function transferToken(address _from, address _to, uint256 tokenId) public {
        safeTransferFrom(_from, _to, tokenId);
    }
}
