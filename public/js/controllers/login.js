define(["i18n!resources/nls/res"], function(res){
    var loginController = ["$scope", "$rootScope", "$http", "$location", "AUTH_EVENTS", "AuthService",
        function($scope, $rootScope, $http, $location, AUTH_EVENTS, AuthService){
            $rootScope.title = res.login;

            $scope.user = {
                "name": "",
                "password": ""
            }
            // $scope.err = ""
            /*$scope.login = function(){
                $http.post("/login", $scope.user).success(function(data){
                    if(data.err){
                        return $scope.err = data.err;
                    }
                    // $scope.user = data.user;
                    $scope.$parent.resetLogin(data);
                    $location.path("/");
                })
            }*/

            $scope.login = function(user){
                AuthService.login(user).then(function(data){
                   if(data.user) {
                       $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                       $scope.$parent.setCurrentUser(data.user);//向父级controller传递当前用户信息
                       $location.path("/");
                   }else if(data.err){
                       $scope.err = data.err;
                       $rootScope.$broadcast(AUTH_EVENTS.loginFailed)
                   }
                }, function(){
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed)
                })
            }
        }]
    return loginController;
})