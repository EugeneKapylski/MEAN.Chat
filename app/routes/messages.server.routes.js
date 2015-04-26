'use strict';

module.exports = function(app) {
	// Message Routes
	var messages = require('../../app/controllers/public-messages.server.controller');
	
	// Setting up the users profile api
	app.route('/messages/public').get(messages.allMessages);
	app.route('/messages/public').post(messages.sendMessage);
};