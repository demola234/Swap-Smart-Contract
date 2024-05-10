import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwapModules = buildModule("SwapModules", (m) => {
  const swap = m.contract("SingleSwap");

  return { swap };
});

export default SwapModules;
