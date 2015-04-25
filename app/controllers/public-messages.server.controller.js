'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	Message = mongoose.model('Message');

/**
 * List of Messages
 */
exports.allMessages = function(req, res, next) {
	Message.find().sort('-postDate').exec(function(err, messages) {
		if (err) return next(err);
		if (!messages) return next(new Error('Failed to get Messages'));
		res.json(messages);
		next();
	});
};

exports.sendMessage = function(req, res, next) {
	// Init Variables
	var messageToSave = new Message(req.body);
	
	

	var message = null;

	// Then save the user 
	messageToSave.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}  else {
			var socketio = req.app.get('socketio'); // tacke out socket instance from the app container
			socketio.sockets.emit('message.sent', messageToSave); // emit an event for all connected clients
			res.json(messageToSave);
		}
	});
};