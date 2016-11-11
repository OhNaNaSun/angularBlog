define("app", function(app){
    return app.directive("loginDialog", function(AUTH_EVENTS){
        return {
            restrict: "A",//属性
            template: '<div ng-if="visible" ng-include="\'login-form.html\'"></div>',
            link: function($scope){
                var showDialog = function(){
                    $scope.isvible = true
                }
                $scope.on(AUTH_EVENTS.notAuthenticated, showDialog);
                $scope.on(AUTH_EVENTS.sessionTimeout, showDialog);
            }

        }
    })
})