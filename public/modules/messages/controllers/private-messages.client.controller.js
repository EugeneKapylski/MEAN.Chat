'use strict';

angular.module('messages').controller('PrivateMessagesController', ['$scope', '$stateParams', '$http', '$location', 'Socket', 'Authentication', 'PrivateMessages',
	function($scope, $stateParams, $http, $location, Socket, Authentication, PrivateMessages) {
		var currentRoomName = 'public';
		var currentUser = Authentication.user;
		var targetUserId = "553b8d553b69f9df16ca3754";//TODO: need to implement
		var emptyMessageModel = {
			message: '',
			createdByUserId: currentUser._id,
			createdByUserName: currentUser.username,
			targetUserId: targetUserId,
			roomName: currentRoomName, 
			postDate: ''
		};
		
		$scope.allMessages = [];

		
		$http.get('/messages/sourceUser/' + currentUser._id +'/targetUser/' + targetUserId)
			.success(function(messages) {
				$scope.allMessages = messages;
			})
			.error(function(data, status, headers, config) {}
		);
		
		$scope.newMessage = angular.copy(emptyMessageModel);
	
		$scope.sendMessage = function() {
			$scope.newMessage.postDate = new Date();
			$http.post('/messages/public', $scope.newMessage).error(function(response) {
				$scope.error = response.message;
			});
		};
		
		Socket.on('private.message.sent', function(message) {
			$scope.allMessages.push(message);
			$scope.newMessage = angular.copy(emptyMessageModel);
		});
	}
]);