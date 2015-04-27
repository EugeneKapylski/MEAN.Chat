'use strict';

module.exports = function(app) {
	// Message Routes
	var messages = require('../../app/controllers/messages.server.controller');
	
	// Setting up the users profile api
	app.route('/messages/public').get(messages.allMessages);
	app.route('/messages/public').post(messages.sendMessage);
	app.route('messages/sourceUser/:sourceUserId/targetUser/:targetUserId').get(messages.allMessages);
};