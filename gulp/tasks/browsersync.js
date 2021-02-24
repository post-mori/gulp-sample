/**
 * Browsersync
 */

var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("browser", function(done){
	browserSync.init({	
	    server: {
	      baseDir: "./src"
	    }
	});

	gulp.watch("src/**", function(done){
		browserSync.reload();
		done();
	});
});
