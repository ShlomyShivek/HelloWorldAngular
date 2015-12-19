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
            dist:{
                files:[{
                    expand: true,
                    src:['./js/**/*.js'],
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 

    // Default task.  
    grunt.registerTask('default', ['ngAnnotate', 'concat','uglify', 'cssmin']);  
};