'use strict';

// Messages service used for communicating with the users REST endpoint
angular.module('messages').factory('Messages', ['$resource',
	function($resource) {
		return $resource('messages/public', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);