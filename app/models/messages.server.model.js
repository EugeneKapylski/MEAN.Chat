'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Message Schema
 */
var MessageSchema = new Schema({
	message: {
		type: String,
		trim: true,
		default: ''
	},
	postDate: {
		type: Date,
		default: Date.now
	},
	createdByUserId: {
		type: String
	},
	createdByUserName: {
		type: String
	},
	roomName: {
		type: String,
		trim: true
	}
});

mongoose.model('Message', MessageSchema);