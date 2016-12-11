requirejs.config({
    //By default load any module IDs from js/lib
    paths: {
        "jquery": '../lib/jquery/jquery',
        "angular": "../lib/angular/angular",
        "angular-ui-router": "../lib/angular/angular-ui-router.min",
        "bootstrap": "../lib/bootstrap-3.3.7-dist/js/bootstrap.min",
        "angular-ui-bootstarp": "../lib/angular/ui-bootstrap-tpls-2.2.0",
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
        },
        "angular-ui-bootstarp": {
            deps: ["angular"]
            // exports:"ui.bootstrap"
        }
    },
    urlArgs: 'v=1.0.0'
});
// Start the main app logic.
require(
    [
        'angular',
        'jquery',
        'angular-ui-router',
        'angular-ui-bootstarp',
        'app',
        'controllers/leftSidebar',
        'bootstrap',
        'controllers/layout',
        'directives/compare',
        'directives/loginDialog',
        'services/authService',
        'services/leftSideConfig',
        'routes'
    ],
    function (angular) {
        angular.bootstrap(document, ['app']);
    }
);