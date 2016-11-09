module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/js",
                    paths: {
                        jquery: '../lib/jquery/jquery',
                        angular: "../lib/angular/angular.min"
                    },
                    shim: {
                        'angular' : {exports : 'angular'}
                    },
                    optimize: "none",//???
                    name: "main",//执行的第一个requirejs包
                    out: "public/js/main-built.js"
                }
            }
        },
        cssmin: {
            compress: {
                options: {
                    banner: '/* angularBlog minified css file*/'
                },
                files: {
                    'public/css/main-built.css': [
                        'public/lib/bootstrap-3.3.7-dist/bootstrap',
                        'public/css/base'
                        // 'public/themes/glowsimple/default.css'
                    ]
                }
            }
        },
        concat: {
            domop: {
                src: "public/js/*.js",
                dest: "dest/angularBlog.js"
            }
        },
        uglify: {
            options: {
                banner: '! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: "src/<%= pkg.name %>",
                dest: "build/<%= pkg.name %>.min.js"
            }
        },
        watch: {
            /*gruntfile: {
             files: 'Gruntfile.js',
             tasks: ['jshint:gruntfile'],
             },*/
            options: {
                livereload:true//实时重载
            },
            src: {
                files: ['public/js/**/*.js', 'public/css/**/*.css'],
                tasks: ['default']
            }
            /*test: {
             files: '<%= jshint.test.src %>',
             tasks: ['jshint:test', 'qunit'],
             }*/
        },
    });
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 默认被执行的任务列表。
    grunt.registerTask("default", ["requirejs", "cssmin"]);
}