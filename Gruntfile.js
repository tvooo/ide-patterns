module.exports = function ( grunt ) {

    grunt.initConfig ({
        compass: {
            rapid: {
                options: {
                    sassDir: 'styles',
                    cssDir: 'assets/styles',
                    outputStyle: 'expanded',
                    relativeAssets: true
                }
            }
        },
        sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'build/assets/main.css': 'styles/main.scss'
      }
    }
  },

        watch: {
            css : {
                files: ['styles/**/*.scss'],
                tasks: ['sass']
            },
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'build/',
                    keepalive: false,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('css', ['compass:rapid'] );
    grunt.registerTask('js', ['concat:js']);
    grunt.registerTask('default', ['connect', 'watch']);
    //grunt.registerTask('build', ['clean', 'js', 'css', 'bear', 'cssmin', 'copy']);

    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
