define([
        "app",
        "controllers/index",
        "controllers/login",
        "controllers/logout",
        "controllers/signup",
        "controllers/feedback",
        "controllers/rong/listdata"
    ],
    function (app, index, login, logout, signup, feedback, listdata) {
        return app
            .config(["$stateProvider", "$urlRouterProvider", "USER_ROLES","$httpProvider",  function ($stateProvider, $urlRouterProvider, USER_ROLES, $httpProvider) {//用constant注册的服务
                $urlRouterProvider.otherwise('/rong');
                $stateProvider
                    .state("rong", {
                        url: "/rong",
                        templateUrl: 'partials/leftSide.html',
                        controller: index,
                        data: {
                            login: false
                        }
                    })
                    .state("rong.listdata", {
                        url: "/listdata",
                        templateUrl: 'partials/rong/listdata.html',
                        controller: listdata
                    })
                    .state("login", {
                        url: "/login",
                        templateUrl: "partials/login.html",
                        controller: login,
                        data: {
                            login: false
                        }
                    })
                    .state("logout", {
                        url: "/logout",
                        // templateUrl: "partials/logout.html",
                        controller: logout,
                        data: {
                            login: true
                        }
                    })
                    .state("signup", {
                        url: "/signup",
                        templateUrl: "partials/signup.html",
                        controller: signup,
                        data: {
                            login: false
                        }
                    })
                    .state("feedback", {
                        url: "/feedback",
                        templateUrl: "partials/feedback.html",
                        controller: feedback,
                        data: {
                            authorizedRoles: [USER_ROLES.admin, USER_ROLES.guest],
                            login: true
                        }
                    })
                    $httpProvider.interceptors.push("AuthInterceptor")
            }])
            .run(function ($rootScope, $location, AUTH_EVENTS, AuthService) {
                $rootScope.$on("$stateChangeStart", function (evt, next, current) {
                    if (next.data && next.data.login) {
                            if (!!AuthService.currentUser.name != next.data.login) {//登录状态与设置不符
                                evt.preventDefault();
                            } else if (next.data.authorizedRoles) {
                                var authorizedRoles = next.data.authorizedRoles || "";
                                if (!AuthService.isAuthorized(authorizedRoles)) {//此用户未被授权
                                    evt.preventDefault();
                                }
                            }
                    }
                })
            })
    })