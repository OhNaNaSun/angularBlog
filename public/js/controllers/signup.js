define(['i18n!resources/nls/res'], function(res){
    var signupController = ["$scope","$rootScope","$http", "$location", function($scope, $rootScope, $http, $location){
        $rootScope.title = "Sign Up";

        $scope.user = {
            name: "",
            password: "",
            repeatpassword: ""
        }

        $scope.signup = function(){
            $http.post("/signup", $scope.user).success(function(data){
                if(data.err){
                    return $scope.err = data.err;
                }
                $scope.$parent.setCurrentUser(data);
                $location.path("/");
            })
        }
    }]
    return signupController;
})