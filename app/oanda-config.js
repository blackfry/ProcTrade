var domain = 'api-fxpractice.oanda.com';
var access_token = '9d92345fbd341ef65a38718e8b913073-f99ff2849a98013a2b6bee0fd2dd32b9';
var account_id = '3180741';
var instruments = "EUR_USD";
var https;

module.exports = {

	if (domain.indexOf("api-sandbox") > -1) {
		https = require('http');
	} else {
		https = require('https');
	}
	var options = {
		host: domain,
		path: '/v1/prices?accountId=' + account_id + '&instruments=' + instruments,
		method: 'GET',
		headers: {
			"Authorization" : "Bearer " + access_token
		},
	};

};