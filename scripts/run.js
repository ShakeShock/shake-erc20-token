async function main() {

  const Shake = await hre.ethers.getContractFactory("Shake");
  const shake = await Shake.deploy("Hello Shake!");

  await shake.deployed();

  console.log("Shake deployed to:", shake.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
