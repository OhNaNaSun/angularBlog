define(['i18n!resources/nls/res'], function(res){
    var logoutController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location){
        $rootScope.title =res.logout;
        $http.get("/logout").success(function(){
            $scope.$parent.setCurrentUser({});
            $location.path("/");
        })
    }]
    return logoutController;
})