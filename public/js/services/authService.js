define(["app"], function (app) {
    return app
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        })
        .constant('USER_ROLES', {
            all: '*',
            admin: 'admin',
            editor: 'editor',
            guest: 'guest'
        })
        .factory("AuthService", function($http){
            var authService = {};
            authService.login = function(user){
               return $http
                    .post("/login", user)
                    .then(function(res){
                        return res.data.user;
                    })
            }

            authService.isAuthenticated = function(){
                $http.get("/checklogin").then(function(res){
                    if(res.data && res.data.user){
                        return res.data.user
                    }
                })
            }
            authService.isAuthorized = function(authorizedRoles){
                if(!angular.isArray(authorizedRoles)){
                    authorizedRoles = [authorizedRoles]
                }
                var user;
                return (user=authService.isAuthenticated()) && (authorizedRoles.indexOf(user.userRole)!==-1)
            }
            return authService;
        })
        .factory("AuthInterceptor", function($rootScope, $q, AUTH_EVENTS){
            return {
                responseError: function (response) {
                    $rootScope.$broadcast({
                        401: AUTH_EVENTS.notAuthenticated,
                        403: AUTH_EVENTS.notAuthorized,
                        419: AUTH_EVENTS.sessionTimeout,
                        440: AUTH_EVENTS.sessionTimeout
                    }[response.status], response);
                    return $q.reject(response);
                }
            }
        })
})