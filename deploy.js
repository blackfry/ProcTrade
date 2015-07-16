// Run by the package.json srcript "postinstall"
// Since posinstall will also run when you run npm install
// locally, we make sure it only runs in production

if (process.env.NODE_ENV === 'production') {

	// We basically jsut create a child process that will run
	// the production bundle command
	var child_process = require('child-process');
	return child_process.exec("webpack -p --config webpack.production.config.js"), function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + sterr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
}

// Whenever you push to the repo, Heroku will install the dependecies and
// then run this deploy script before running 'npm start'