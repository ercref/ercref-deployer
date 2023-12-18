import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import { deployByName } from "../utils/deployUtil";

task("deploy", "Mints tokens to an address")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    await deployByName(ethers, "ERCRefDeployer", []);
  });
