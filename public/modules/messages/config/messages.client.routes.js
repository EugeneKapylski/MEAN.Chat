'use strict';

// Setting up route
angular.module('messages').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('messages', {
			url: '/messages/all',
			templateUrl: 'modules/messages/views/public-messages/publicl-messages.client.view.html'
		});
	}
]);