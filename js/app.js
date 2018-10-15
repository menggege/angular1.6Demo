require.config({
    baseUrl:'/js',
    paths:{
        'angular':'https://cdn.bootcss.com/angular.js/1.5.0/angular',
        'angular-route':'https://cdn.bootcss.com/angular.js/1.5.0/angular-route',
        'main':'main',
        'service':'service/common',
        'provider':'provider/common',
        'about':'about/main'
    },
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-route":{
            exports:"angular-route",
            deps: ["angular"]
        }
    }
});

require(['main'],function(){

    angular.bootstrap(document, ["myApp"]);  
});

    	/*var app = angular.module('app',[]);

    	//自定义属性指令
    	app.directive('focusTest',function(){

    		return {
    			link:function($scope,ele){
    					ele[0].focus();
    			}
    		};
    	});

    	//自定义表情指令
    	app.directive('hello',function(){

    		return{
    			restrict:'E',
    			replace:true,
    			template:'<div>Say Hello!   query:{{query}}</div>'
    		}
    	});

    	//自定义filter
    	app.filter("capitalize",function(){

    		return function(input,param){
    			return input.substring(0,1).toUpperCase()+input.substring(1);
    		}
    	});

    	//创建服务
    	app.factory("UserInfomation",function(){

    		return {name:'anguler.js'};
    	});

    	app.controller("TestCtrl",function($scope,UserInfomation) {
    		
    		$scope.query="first";
    		$scope.user = UserInfomation;
            $scope.tDate = new Date();

    		$scope.cli=function(){

    			$scope.query="newFirst";
    		};
    	});*/
