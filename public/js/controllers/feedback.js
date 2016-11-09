define([], function(){
    var feedbackController = ["$scope", function($scope){
        var MAX_LEN = 10;
        $scope.message = "";
        $scope.remaining = function(){
            return (MAX_LEN - $scope.message.length) >= 0 ? (MAX_LEN - $scope.message.length) : "字数超出限制" ;
        }
        $scope.hasValidLength = function(){
            return $scope.message.length < MAX_LEN;
        }
        $scope.clear = function(){
            $scope.message = "";
        }
    }]
    return feedbackController;
})