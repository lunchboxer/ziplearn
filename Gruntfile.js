module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: { debug: { options: { style: 'expanded'
                              , debugInfo: true
                              , sourceComments: 'map'
                              }
                   , files: { 'static/css/app.debug.css': 'static/sass/app.scss' }
                   }
          , min: { options: { outputStyle: 'compressed' }
                 , files: { 'static/css/app.css': 'static/sass/app.scss' }
                 }
          }

    // Don't bother with compression, because they're already compressed
    , uglify: { options: { preserveComments: false
                         , compress: false
                         , report: 'gzip'
                         }
              , depends: { files: { 'static/js/dependencies.js': [ 'static/components/jquery/dist/jquery.min.js'
                                                                 , 'static/components/handlebars/handlebars.min.js'
                                                                 , 'static/components/ember/ember.min.js'
                                                                 , 'static/components/ember-data/ember-data.min.js'
                                                                 ]
                                  }
                         }
              }

    , watch: { grunt: { files: ['Gruntfile.js']
                      , tasks: 'default'
                      }
             , sass: { files: 'static/scss/**/*.scss'
                     , tasks: ['sass:min']
                     }
             , js: { files: 'static/components/**/*'
                   , tasks: ['uglify']
                   }
             }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass:min']);
  grunt.registerTask('default', ['build', 'watch']);
};
