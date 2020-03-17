module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: 'register.html',
          dest: './dist/register.min.html'
        }
      },
      cssmin:{
          './dist/register.min.css':'register.css'
      },
      uglify:{
          release:{
              files:{
                  './dist/register.min.js':'register.js'
              }
          }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('html', ['htmlmin']); 
    grunt.registerTask('css',['cssmin']);
    grunt.registerTask('js',['uglify:release'])
  };