module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* <%= pkg.homepage %>/\n' +
                '*\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                '<%= pkg.author.name %>; Licensed MIT */\n',
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                src: '<%= pkg.name %>.min.js',
                dest: 'demo/js/<%= pkg.name %>.min.js',
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy']);

};
