define(function(require,exports,module){
	require('angular');
	require('service');

	var about = angular.module('myApp.About',['myApp.service']);

	about.controller("aboutController",function ($scope,UserService) {
		
		  UserService.setUser({name:'test3'});
	      $scope.user= UserService.getUser();
	});

});