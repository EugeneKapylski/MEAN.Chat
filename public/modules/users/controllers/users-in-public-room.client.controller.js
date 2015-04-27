'use strict';

angular.module('users').controller('UsersInPublicRoomController', ['$scope', '$stateParams', '$http', '$location', 'Socket', 'Authentication', 'Users',
	function($scope, $stateParams, $http, $location, Socket, Authentication, Users) {
	    $scope.usersInRoom = [];
	    $scope.currentUser = Authentication.user;
		
		Users.query(function(users) {
			$scope.usersInRoom = users;
		});
	}
]);