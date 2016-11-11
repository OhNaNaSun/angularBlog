requirejs.config({
    //By default load any module IDs from js/lib
    paths: {
        "jquery": '../lib/jquery/jquery',
        "angular": "../lib/angular/angular",
        "angular-ui-router": "../lib/angular/angular-ui-router.min",
        "bootstrap": "../lib/bootstrap-3.3.7-dist/js/bootstrap.min",
        "i18n": "../lib/require/i18n"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-ui-router": {
            deps: ["angular"]
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    },
    urlArgs: 'v=1.0.0'
});
// Start the main app logic.
require(
    [
        'angular',
        'app',
        'jquery',
        'bootstrap',
        'controllers/layout',
        'controllers/index',
        'directives/compare',
        'directives/loginDialog',
        'services/authService',
        'routes'
    ],
    function (angular) {
        angular.bootstrap(document, ['app']);
    }
);