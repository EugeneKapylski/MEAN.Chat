'use strict';

angular.module('messages').controller('PublicMessagesController', ['$scope', 'Messages',
	function($scope, Messages) {
		$scope.allMessages = [];
		Messages.query(function(messages) {
			$scope.allMessages = messages;
		});
		//	[{message: "message 1", postDate: new Date("2015-04-11T10:21:00")},
		//	{message: "message 2", postDate: new Date("2015-04-11T11:26:00")}];
	}
]);