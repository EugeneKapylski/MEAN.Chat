'use strict';

// Messages service used for communicating with the users REST endpoint
angular.module('messages').factory('PrivateMessages', ['$resource',
	function($resource) {
		return $resource('/messages/targetUser/:userId');
		//return $resource('messages/targetUser/:userId', {}, {
		//	update: {
		//		method: 'PUT'
		//	}
		//});
	}
]);