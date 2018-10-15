define(function(require,exports,module){
   
   require('angular');
   var appService  = angular.module('myApp.service',[]);

   appService.config(function($provide){


   		$provide.factory('UserService',function(){
   			
	        var current_User;
	        return{
	            getUser:function(){return current_User;},
	            setUser:function(user){current_User= user;}
	        };
        });
    });
});