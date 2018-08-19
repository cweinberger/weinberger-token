var WeinbergerToken = artifacts.require("./WeinbergerToken.sol");

module.exports = function(deployer) {
  deployer.deploy(WeinbergerToken);
};
