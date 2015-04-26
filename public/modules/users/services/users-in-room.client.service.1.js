'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('UsersInRoom', ['$resource',
	function($resource) {
		return $resource('users/all', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);