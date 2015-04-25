'use strict';

angular.module('messages').controller('PublicMessagesController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', 'Messages',
	function($scope, $stateParams, $http, $location, Authentication, Messages) {
		var currentRoomName = "public";
		var currentUser = Authentication.user;
		$scope.allMessages = [];
		Messages.query(function(messages) {
			$scope.allMessages = messages;
		});
		
		$scope.newMessage = {message: 'default', createdByUserId: currentUser._id, createdByUserName: currentUser.username, roomName: currentRoomName, postDate: ''};
	
		//	[{message: "message 1", postDate: new Date("2015-04-11T10:21:00")},
		//	{message: "message 2", postDate: new Date("2015-04-11T11:26:00")}];
		$scope.sendMessage = function() {
			$scope.newMessage.postDate = new Date();
			//TODO: get currentUserId
			$http.post('/messages/public', $scope.newMessage).success(function(response) {
				// If successful we assign the response to the global user model
				//$scope.authentication.user = response;

				// And redirect to the index page
				$scope.allMessages.push(response);
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);