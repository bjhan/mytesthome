var path = require('path');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    concat: {
      dist: {
        src: ['javascripts/common.js','javascripts/respond.js'],
        dest: 'javascripts/main.js'
      }
    },
      uglify: {
      options: {
        banner: '/*script for site: http://chemzqm.me*/'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'javascripts/main.min.js'
      }
    },
    cssmin: {
      compress:{
        files:{
          "stylesheets/styles.min.css":["stylesheets/styles.css"]
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        node: true,
        globals: {
          jQuery: true
        }
      },
      all: ['javascripts/common.js','Gruntfile.js']
    },
    regarde: {
      livereload: {
        files: ['_posts/*.md', 'javascripts/common.js', 'stylesheets/styles.css', '*.html'],
        tasks: ['default', 'livereload']
      }
    },
    connect: {
      livereload: {
        options: {
          port: 8000,
          middleware: function(connect, options) {
            return [snippet, connect.static(path.resolve(process.cwd(), '_site'))];
          }
        }
      }
    },
    bgShell:{
      jekyll:{
        cmd: 'jekyll'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'bgShell:jekyll']);
  // start livereload server
  grunt.registerTask('server', ['livereload-start', 'connect', 'regarde']);

};
