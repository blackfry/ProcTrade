var domain = 'https://api-fxpractice.oanda.com';
var sandbox = 'http://api-sandbox.oanda.com';
var access_token = '9d92345fbd341ef65a38718e8b913073-f99ff2849a98013a2b6bee0fd2dd32b9';
var account_id = '3180741';
var instruments = 'EUR_USD';
var https;
var Fetch = require('whatwg-fetch');

//var url = '/v1/instruments'
//var simple_url = '/v1/prices?instrument=EUR_USD';
//var complex_url= '/v1/candles?instrument=EUR_USD&count=2&candleFormat=midpoint&granularity=D&dailyAlignment=0&alignmentTimezone=America%2FNew_York';

module.exports = window.api = {
	get: function(url) {
		return fetch(sandbox + url, {
			headers: {
				"Authorization" : "Bearer " + access_token
			}
		})
		.then(function (response) {
			return response.json()
		})
	}
};