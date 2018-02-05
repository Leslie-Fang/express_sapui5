/**
 * Created by leslie on 2018/2/5.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var server = require( 'gulp-develop-server');

var Paths = {
    routes_src:'routes/*.js',
    routes_dest:'build/routes',
    html_src:'views/**',
    gulp_src:'./gulpfile.js',
    sap_src:"sapui5/**",
    sap_views:"sapui5/views/*",
    sap_controller:"sapui5/controller/*"
};

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});

// run server
gulp.task( 'server.restart', function() {
    server.restart();
});

gulp.task('watch',function(){
    gulp.watch([Paths.routes_src,Paths.html_src,Paths.gulp_src,Paths.sap_src,Paths.sap_views],['server.restart']);
});
gulp.task('default', ['server:start','watch']);