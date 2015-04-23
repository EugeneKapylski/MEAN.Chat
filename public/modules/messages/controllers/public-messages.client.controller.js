'use strict';

angular.module('messages').controller('PublicMessagesController', ['$scope', 
	function($scope) {
		$scope.allMessages = [{message: "message 1", postDate: new Date("2015-04-11T10:21:00")},
		{message: "message 2", postDate: new Date("2015-04-11T11:26:00")}];
	}
]);