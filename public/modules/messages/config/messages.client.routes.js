'use strict';

// Setting up route
angular.module('messages').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('messages', {
			url: '/messages/public',
			templateUrl: 'modules/messages/views/public-messages/public-messages.client.view.html'
		});
	}
]);