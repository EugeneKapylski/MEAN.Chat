'use strict';
/**
 * Module dependencies.
 */
require('./config/init')();
var config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.get('server').listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('iTechArt.Chat application started on port ' + config.port);