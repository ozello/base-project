module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        /*       sass: {
                   dist: {
                       options: {
                           style: 'expanded'
                       },
                       files: {
                           'css/app.css': 'css/app.scss'
                       }
                   }
               },*/
        concat: {
            js: {
                src: ['js/**/*.js'],
                dest: 'build/scripts.js',
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'build/styles.css',
            },
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            beforeconcat: ['js/**/*.js'],
            afterconcat: ['build/scripts.js']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/**/*.html': 'view/**/*.html'
                }
            },
            dev: {
                files: {
                    'build/**/*.html': 'view/**/*.html'
                }
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js', 'jshint'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', [ /*'sass', */ 'concat', 'jshint', 'watch']);

}
