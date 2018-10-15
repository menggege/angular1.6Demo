define(function(require,exports,module) {
	
		

	var app = angular.module('myApp', ['ngRoute','myApp.Provider','myApp.About']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: function(){}
            })
            .when('/about', {
                templateUrl:'about.html',
                controller:'aboutController'
            })
            .when('/news',{
                templateUrl:'news.html',
                controller:function($scope,TestService){
                    
                    $scope.user= TestService;
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

    app.config(function($locationProvider,$provide,TestServiceProvider){
        
        $locationProvider.html5Mode(false);

        TestServiceProvider.setUser({userName:'testA'});
        
        $provide.factory('UserService2',function(){

             var current_User;
            return{
                getUser:function(){return current_User;},
                setUser:function(user){current_User= user;}
            };
        });

    });


    var appService  = angular.module('myApp.service',[]);

   appService.factory("UserService",function(){

        var current_User;
        return{
            getUser:function(){return current_User;},
            setUser:function(user){current_User= user;}
        };
    });


   var appProvider = angular.module('myApp.Provider',[]);

    appProvider.provider("TestService",{

        user:{userName:'test1'},

        setUser:function(_user){
            this.user = _user;
        },

        $get:function(){
            return this.user;
        }
    });


    app.run(function($rootScope,$location){

        $rootScope.$on('$routeChangeStart',function(evt,next,change){

            /*if(next.templateUrl=="about.html")
                $location.path('/news');*/


        });
    });

});