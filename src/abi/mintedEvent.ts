import { parseAbiItem } from "viem";

export const mintedEvent = parseAbiItem(
  "event Minted(address indexed user,uint256 quantity,uint256 reward,uint256 paid)"
);