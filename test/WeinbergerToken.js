var WeinbergerToken = artifacts.require("./WeinbergerToken.sol")

contract('WeinbergerToken', function(accounts) {

	it('sets the total supply upon deployment', function() {
		return WeinbergerToken.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
		})
	});
})