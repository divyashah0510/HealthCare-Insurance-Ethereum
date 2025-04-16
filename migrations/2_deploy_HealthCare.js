const HealthCare = artifacts.require("HealthCare");

module.exports = async function(deployer, network, accounts) {
  // Use the second account as Lab Admin
  const labAdminAddress = accounts[1];
  await deployer.deploy(HealthCare, labAdminAddress);
};
