'use strict';
define(['../app', 'i18n!resources/nls/res'], function(app, res){
    return app.controller('LayoutController', function($scope, $http, USER_ROLES){
        $http.get("/api/checklogin").then(function(user){
            $scope.setCurrentUser(user);
        })
        $scope.setCurrentUser = function(user){
            $scope.navArr = [];
            $scope.name = "";
            if(user.name){
                $scope.navArr = [
                    {
                        name: "welcome: " + user.name + ", you are " + USER_ROLES[user.role],
                        url: ""
                    },
                    {
                        name: "Feedback",
                        url: "/feedback"
                    },
                    {
                        name: "Logout",
                        url: "/logout"
                    },
                    {
                        name: "Help",
                        url: ""
                    }
                ];
            }else{
                $scope.navArr = [
                    {
                        name: res.login,
                        url: "/login"
                    },
                    {
                        name: res.signup,
                        url: "/signup"
                    }

                ];
            }
            console.log($scope.navArr);
        }

    })
})