"user strict"
define(["i18n!resources/nls/res"], function(res){
    var indexController = function($scope, $rootScope){
        $scope.title = res.title;
        $rootScope.title = res.title;
    }
    return indexController;
})