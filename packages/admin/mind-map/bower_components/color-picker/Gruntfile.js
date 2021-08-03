/* global require, module */

var path = require('path');

module.exports = function(grunt) {
    'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);


    var pkg = grunt.file.readJSON('package.json');

	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};

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
        pkg: pkg,

	    yeoman: appConfig,

		clean: {
			last: [
				'.tmp',
				'dist/*.js',
				'dist/*.css',
				'dist/*.css.map'
			],
			tmp: ['.tmp']
		},

		concat: {
			js: {
				files: {
					'dist/color-picker.js': [
						'.tmp/*.js'
					]
				}
			}
		},

        uglify: {
            options: {
                banner: banner,
				sourceMap: true
            },
            minimize: {
                files: [{
	                src: 'dist/color-picker.js',
	                dest: 'dist/color-picker.min.js'
                }]
            }
        },

        less: {
            compile: {
                options: {
                    sourceMap: true,
	                sourceMapURL: 'color-picker.css.map',
                    sourceMapFilename: 'dist/color-picker.css.map'
                },
                files: [{
                    dest: 'dist/color-picker.css',
                    src: 'less/color-picker.less'
                }]
            }
        },

	    cssmin: {
	        dist: {
	            files: {
	                'dist/color-picker.min.css': 'dist/color-picker.css'
	         }
	       }
	    },


	    // Automatically inject Bower components into the app
	    wiredep: {
		    dev: {
			    src: ['index.html'],
			    devDependencies: true
		    },
		    dist: {
			    src: ['dist/index.html']
		    }
	    },


	    // ng-annotate tries to make the code safe for minification automatically
	    // by using the Angular long form for dependency injection.
	    ngAnnotate: {
		    dist: {
			    files: [{
				    expand: true,
				    cwd: 'src/',
				    src: '*.js',
				    ext: '.js',
				    extDot: 'last',
				    dest: '.tmp'
			    }]
		    }
	    }


    });

    // Build task(s).
	grunt.registerTask('build', ['clean:last', 'ngAnnotate', 'concat:js', 'uglify', 'less', 'cssmin', 'clean:tmp']);
};