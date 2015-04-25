'use strict';

angular.module('messages').controller('PublicMessagesController', ['$scope', '$stateParams', '$http', '$location', 'Socket', 'Authentication', 'Messages',
	function($scope, $stateParams, $http, $location, Socket, Authentication, Messages) {
		var currentRoomName = 'public';
		var currentUser = Authentication.user;
		var emptyMessageModel = {
			message: '',
			createdByUserId: currentUser._id,
			createdByUserName: currentUser.username,
			roomName: currentRoomName, 
			postDate: ''
		};
		
		$scope.allMessages = [];
		
		Messages.query(function(messages) {
			$scope.allMessages = messages;
		});
		
		$scope.newMessage = angular.copy(emptyMessageModel);
	
		$scope.sendMessage = function() {
			$scope.newMessage.postDate = new Date();
			$http.post('/messages/public', $scope.newMessage).error(function(response) {
				$scope.error = response.message;
			});
		};
		
		Socket.on('message.sent', function(message) {
			$scope.allMessages.push(message);
			$scope.newMessage = angular.copy(emptyMessageModel);
		});
	}
]);