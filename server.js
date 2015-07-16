var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var http = require('http');

// httpProxy returns an object with four value: web for proxying HTTP(S) requests;
// ws: for WS(S) requests; listen: wraps the object in a web server;
// close: stops the inner sever and stops listening on given port
var proxy = httpProxy.createProxyServer({
	changeOrigin: true,  // changes the origin of the host header to the target URL
	ws: true  // If you want to proxy websockets
});
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
// '?' is called a ternary operator
// condition ? value-if-true : value-if-false
var port = isProduction ? process.env.PORT : 3001;
var publicPath = path.resolve(__dirname, 'public');

// we point to our static assets
app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

	// We require the bundler inside the if block because
	// it is only needed in a development environment. Later
	// you will see why this is a good idea
	var bundle = require('./server/bundle.js');
	bundle();

	// Any requests to localhost:3001/build is proxied
	// to webpack-dev-server
	app.all('/build/*', function (req, res) {
		proxy.web(req, res, {
			target: 'http://localhost:3001'
		});
	});
	app.all('/socket.io*', function (req, res) {
		proxy.web(req, res, {
			target: 'http://localhost:3001'
		});
	});

	// It is important to catch any errors from the proxy or the
	// server will crash. An example of this is connecting to the 
	// server when webpack is bundling
	proxy.on('error',  function(e) {
		// Just catch it
	});

	// We need to use basic HTTP service to proxy
	// websocket requests from webpack
	var server = http.createServer(app);

	server.listen(port, function () {
		console.log('Server running on port ' + port);
	});
} else {

	// And run the server
	app.listen(port, function () {
		console.log('Server running on port ' + port);
	});
}