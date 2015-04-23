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
	}
});

MessageSchema.methods.getAllMessages = function() {
	return [{message: "message 1", postDate: new Date("2015-04-11T10:21:00")},
		{message: "message 2", postDate: new Date("2015-04-11T11:26:00")}];
};

mongoose.model('Message', MessageSchema);