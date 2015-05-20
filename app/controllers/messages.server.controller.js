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
	Message.find({targetUserId: ''}).sort('-postDate').exec(function(err, messages) {
		if (err) {
			return next(err);
		}
		if (!messages) {
			return next(new Error('Failed to get Messages'));
		}
		res.json(messages);
		next();
	});
};

/**
 * List of private Messages
 */
exports.privateMessages = function(req, res, next) {
	Message.find({$or: [{createdByUserId: req.params.sourceUserId }, {targetUserId: req.params.targetUserId}]})
			.exec(function(err, messages) {
				if (err) return next(err);
				if (!messages) return next(new Error('Failed to get Messages'));
				res.json(messages);
			});
};

exports.sendMessage = function(req, res, next) {
	// Init Variables
	var messageToSave = new Message(req.body);

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