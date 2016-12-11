define([], function(){
    var ListdataCtrl = ["$scope","$http", function($scope, $http){
        $scope.chapterData = [];
        $http.get("/api/rong/listdata")
            .success(function(res){
                if(res.code === 0){
                    $scope.chapterData = res.data;
                }
            })
    }];
    return ListdataCtrl;
})