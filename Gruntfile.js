module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      grunt: { files: ['Gruntfile.js'],
                tasks: 'default'},

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass:min']
      },
    },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass:min']);
  grunt.registerTask('default', ['build','watch']);
};
