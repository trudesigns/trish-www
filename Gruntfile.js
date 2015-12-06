// Generated on 2015-08-28 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  var configFile = grunt.file.readJSON('config.json');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-replace');

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    replace: {
      stage: {
        options: {
          patterns: [{
            json: {'gaKey': configFile.stage.gaKey}
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['<%= yeoman.dist %>/index.html'],
          dest: '<%= yeoman.dist %>/'
        }]
      },
      production: {
        options: {
          patterns: [{
            json: {'gaKey': configFile.production.gaKey}
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['<%= yeoman.dist %>/index.html'],
          dest: '<%= yeoman.dist %>/'
        }]
      }
    },

    prompt: {
      deploy: {
        options: {
          questions: [
            {
              config: 'deploytarget',
              name: 'deploytarget',
              type: 'list',
              message: 'Where would you like to deploy?',
              default: 'stage',
              choices: ['stage', 'production']
            },
            {
              name: 'confirmproduction',
              type: 'list',
              message: 'Are you sure you want to deploy to production?' + ' This action is irreversible!'.red,
              default: 'no',
              choices: ['no', 'yes'],
              when: function (answers) {
                return answers.deploytarget === 'production';
              }
            }
          ],
          then: function (answers) {
            if ((answers.deploytarget === 'stage') || (answers.deploytarget === 'production' && answers.confirmproduction === 'yes')) {
              grunt.task.run(['ngconstant:' + answers.deploytarget]);
              grunt.task.run('build');
              grunt.task.run('replace:' + answers.deploytarget);
              grunt.task.run('ftp-deploy:' + answers.deploytarget);
              grunt.task.run('ngconstant:dev');
            }
          }
        }
      }
    },

    ngconstant: {
      dev: {
        options: {
          dest: '<%= yeoman.app %>/scripts/services/config.js',
          name: 'config'
        },
        constants: {
          config: configFile.dev
        },
        values: {
          debug: true
        }
      },
      stage: {
        options: {
          dest: '<%= yeoman.app %>/scripts/services/config.js',
          name: 'config'
        },
        constants: {
          config: configFile.stage
        },
        values: {
          debug: true
        }
      },
      production: {
        options: {
          dest: '<%= yeoman.app %>/scripts/services/config.js',
          name: 'config'
        },
        constants: {
          config: configFile.production
        }
      }
    },

    htmlSnapshot: {
      debug: {
        options: {
          snapshotPath: 'snapshots/',
          sitePath: 'http://localhost:9000/',
          msWaitForPages: 1000,
          urls: [
            '/',
            '/about'
          ]
        }
      },
      prod: {
        options: {}
      }
    },

    'ftp-deploy': {
      stage: {
        auth: {
          host: 'ftp.thehost.se',
          port: 21,
          authKey: 'key1'
        },
        src: 'dist/',
        dest: 'trish-stage/',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/.htaccess']
      },
      production: {
        auth: {
          host: 'ftp.thehost.se',
          port: 21,
          authKey: 'key1'
        },
        src: 'dist/',
        dest: 'trish/',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/.htaccess']
      }
    },

    less: {
      bootstrap: {
        expand: true,
        cwd: '<%= yeoman.app %>/bootstrap',
        src: ['bootstrap.less'],
        dest: '<%= yeoman.app %>/styles',
        ext: '.css'
      },
      main: {
        expand: true,
        cwd: '<%= yeoman.app %>/less',
        src: ['*.less'],
        dest: '<%= yeoman.app %>/styles',
        ext: '.css'
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      less_bootstrap: {
        files: ['<%= yeoman.app %>/bootstrap/{,*/}*.less'],
        tasks: ['less:bootstrap']
      },
      less_main: {
        files: ['<%= yeoman.app %>/less/*.less'],
        tasks: ['less:main']
      },
      config: {
        files: ['config.json'],
        tasks: ['ngconstant:dev']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      }
    },

    // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= yeoman.dist %>/scripts/**/*.js',
    //       '<%= yeoman.dist %>/styles/**/*.css',
    //       '<%= yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= yeoman.dist %>/fonts/**/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'app',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: 'views/{,*/}*.html',
        dest: '.tmp/templateCache.js'
      }
    },

    // // ng-annotate tries to make the code safe for minification automatically
    // // by using the Angular long form for dependency injection.
    // ngAnnotate: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '.tmp/concat/scripts',
    //       src: '*.js',
    //       dest: '.tmp/concat/scripts'
    //     }]
    //   }
    // },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      dist: {
        expand: true,
        src: ['.tmp/concat/scripts/**/*.js'],
        extDot: 'last'
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          //for font-awesome
          expand: true,
          dot: true,
          cwd: 'bower_components/components-font-awesome',
          src: ['fonts/*.*'],
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    // 'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('stage', [
    'ngconstant:stage',
    'build',
    'replace:stage',
    'ftp-deploy:stage',
    'ngconstant:dev'
  ]);

  grunt.registerTask('deploy', [
    'prompt:deploy'
  ]);

};
