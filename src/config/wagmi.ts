import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { robinhoodChain } from "./chains";

export const config = getDefaultConfig({
  appName: "Robinhood PAWC",
  projectId: "c6cd1d1d40c5469458f3d31a88378f8d",
  chains: [robinhoodChain],
  ssr: true,
});