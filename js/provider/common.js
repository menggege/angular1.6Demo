define(function(require,exports,module){

require('angular');
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

});