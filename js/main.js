define(['angular','angular-route','provider','about'],function(angular,angularRoute,provider,about) {
	

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

    app.config(function($httpProvider){

        // 在这里构造拦截器
        var interceptor = function($q, $rootScope, Auth) {
            return {
            'response': function(resp) {
                    if (resp.config.url == '/api/login') {
                    // 假设API服务器返回的数据格式如下:
                    // { token: "AUTH_TOKEN" }
                    Auth.setToken(resp.data.token);
                }
                return resp;
            },
            'responseError': function(rejection) {
                // 错误处理
                switch(rejection.status) {
                    case 401:
                    if (rejection.config.url!=='api/login')
                        // 如果当前不是在登录页面
                        $rootScope.$broadcast('auth:loginRequired');
                        break;
                    case 403:
                        $rootScope.$broadcast('auth:forbidden');
                        break;
                    case 404:
                        $rootScope.$broadcast('page:notFound');
                        break;
                    case 500:
                        $rootScope.$broadcast('server:error');
                        break;
                }
                return $q.reject(rejection);
            }
        };
    });


    app.run(function($rootScope,$location){

        $rootScope.$on('$routeChangeStart',function(evt,next,change){

            /*if(next.templateUrl=="about.html")
                $location.path('/news');*/


        });
    });

});