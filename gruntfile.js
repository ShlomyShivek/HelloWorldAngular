//http://www.sitepoint.com/5-minutes-to-min-safe-angular-code-with-grunt/
//https://github.com/jwvdiermen/grunt-include-source
//https://github.com/changer/grunt-targethtml

module.exports = function (grunt) {  

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        //watch for files changes
        watch: {
            debug:{
                files: ['**/*.js','index.tpl.html'],
                tasks: ['includeSource','targethtml:debug']
            },
            release:{
                files: ['**/*.js','index.tpl.html'],
                tasks: ['ngAnnotate', 'concat','uglify', 'cssmin','includeSource','targethtml:release','clean']
            },
            options: {
                spawn: false,
            },

        },

        //clean annotated temporary files that created in release mode
        clean: ['**/*.js-annotated'],

        //change the index html file that was created from the template according to the build mode
        targethtml: {
            debug: {
                files: {
                    'index.html': 'index.html'
                }
            },
            release: {
                files: {
                    'index.html': 'index.html'
                }
            },
        },

        //include all javascript files from sub directories to the html file automatically
        includeSource: {
            options: {
                basePath: './js',
                baseUrl: 'js/'
            },
            myTarget: {
                files: {
                    'index.html': 'index.tpl.html'
                }
            }
        },

        //create a css min file (TBD)
        cssmin: {  
            sitecss: {  
                options: {  
                    banner: 'ihavenoidea'  
                },  
                files: {  
                    'css/site.min.css': [  
                        'css/debug/site.css',  
                        'css/debug/movie.app.theater-view.css']  
                }  
            }  
        },

        //annotate teh angular functions parameters - prepare them for minification
        ngAnnotate: {
            dist:{
                files:[{
                    expand: true,
                    src:['./js/**/*.js', '!./js/external/angular.min.js'],
                    ext:'.min.js-annotated',
                    extDot:'last'
                }]
            }

        },

        concat: {
			js: { //target
				src: ['./js/*.min.js-annotated'],
				dest: './app.min.js'
			}
		},

        uglify: {
			js: { //target
				src: ['./app.min.js'],
				dest: './app.min.js'
			}
		}
    });  
	
	//load grunt tasks
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-ng-annotate');

    // Default task.  
    grunt.registerTask('release', ['watch:release']);
    grunt.registerTask('debug', ['watch:debug']);
};