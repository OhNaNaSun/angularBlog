'use strict';
define(["../app"], function(app){
    return app.controller('AccordionDemoCtrl', ["$scope", "sideBarConfig", function ($scope, sideBarConfig) {
        $scope.oneAtATime = true;
        // console.log(sideBarConfig);
        $scope.groups = sideBarConfig;

        /*$scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };*/

        /*$scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };*/
    }]);
})