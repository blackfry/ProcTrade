var Quandl = require('quandl');

module.exports = {
	new Quandl({
		auth_token: "iCQ4mUXheRzMXHe45JAU",
		api_version: 1,
		format: "json",
		proxy: "http://localhost:3001"
	})

}