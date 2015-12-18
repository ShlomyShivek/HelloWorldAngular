//http://www.sitepoint.com/5-minutes-to-min-safe-angular-code-with-grunt/

module.exports = function (grunt) {  
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);  
    // Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),  
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
		
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
					'./js/ExternalModule.min.js': ['./js/ExternalModule.js'],
					'./js/HelloWorld.min.js': ['./js/HelloWorld.js']
				}
			}
		},
		concat: {
			js: { //target
				src: ['./js/*.min.js'],
				dest: './js/app.min.js'
			}
		},
        uglify: {
			js: { //target
				src: ['./js/app.min.js'],
				dest: './js/app.min.js'
			}
		}
    });  
	
	//load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 

    // Default task.  
    grunt.registerTask('default', ['ngAnnotate', 'concat','uglify', 'cssmin']);  
};