/*global module:false*/
module.exports = function(grunt) {

    var banner = '/*!\n' +
        ' * ====================================================\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * GitHub: <%= pkg.repository.url %> \n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
        ' * ====================================================\n' +
        ' */\n\n';

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        dependence: {
            options: {
                entrance: 'kity',
                base: 'src'
            },
            merge: {
                files: [{
                    src: 'src/**/*.js',
                    dest: '.build_tmp/kity_tmp.js'
                }]
            }
        },

        concat: {
            closure: {
                options: {
                    banner: banner + '(function () {\n',
                    footer: '})();'
                },
                files: {
                    'dist/kity.js': ['.build_tmp/kity_tmp.js', 'dev-lib/exports.js']
                }
            }
        },

        uglify: {
            options: {
                banner: banner
            },
            minimize: {
                files: {
                    'dist/kity.min.js': 'dist/kity.js'
                }
            }
        },

        clean: {
            tmp: ['.build_tmp']
        },

        jasmine: {
            unit: {
                src: ['dist/kity.min.js'],
                options: {
                    specs: [
                        'spec/core/*',
                        'spec/graphic/*'
                    ],
                    helpers: 'spec/SpecHelper.js',
                    host: 'http://127.0.0.1:7777/'
                }
            }
        },

        connect: {
            unit: {
                options: {
                    hostname: '0.0.0.0',
                    port: 7777,
                    base: '.'
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-module-dependence');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', ['dependence:merge', 'concat:closure', 'uglify:minimize', 'clean:tmp']);
    grunt.registerTask('test', ['default', 'connect:unit', 'jasmine:unit']);

};