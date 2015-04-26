'use strict';

angular.module('users').controller('UsersInPublicRoomController', ['$scope', '$stateParams', '$http', '$location', 'Socket', 'Authentication', 'Users',
	function($scope, $stateParams, $http, $location, Socket, Authentication, Users) {
	    $scope.usersInRoom = [];
	    
	    //$http.get('/users/all').success(function(allUsers) {
	   //    $scope.usersInRoom = allUsers;
	    //});
		
		Users.query(function(users) {
			$scope.usersInRoom = users;
		});
		
	//	Socket.on('user.entered', function(user) {
	//		$scope.allMessages.push(message);
	//		$scope.newMessage = angular.copy(emptyMessageModel);
	//	});
	}
]);