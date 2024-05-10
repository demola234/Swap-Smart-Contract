import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre, { ethers } from "hardhat";

const USDT = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

describe("SwapMultiHop", function () {
  async function deploySwapFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const accounts = await hre.ethers.getSigners();
    const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwap");

    const singleSwapToken = await SingleSwapToken.deploy();

    const weth = await ethers.getContractAt("IIWETH", WETH9);
    const Usdt = await ethers.getContractAt("IERC20", USDT);

    return { weth, singleSwapToken, Usdt, owner, otherAccount };
  }

  it("Should test swapExactInputSingle", async function () {
    // const amountIn = 1000n ** 18n;
    const amountIn = ethers.parseEther("10.0");

    const { weth, singleSwapToken, Usdt, owner, otherAccount } =
      await loadFixture(deploySwapFixture);

    await weth.deposit({ value: amountIn });
    await weth.approve(await singleSwapToken.getAddress(), amountIn);

    // SWAP

    console.log("Usdt Balance:", await Usdt.balanceOf(owner.address));
    console.log("WETH Balance:", await weth.balanceOf(owner.address));

    const tx = await singleSwapToken.swapExactInputSingle(amountIn);
    console.log(tx);
    await tx.wait();
    console.log("Usdt Balance:", await Usdt.balanceOf(owner.address));
    console.log("WETH Balance:", await weth.balanceOf(owner.address));
  });
});
