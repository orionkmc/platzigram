var gulp = require('gulp');           // Libreria Gulp
var sass = require('gulp-sass');      // Sass automatizado con gulp
var rename = require('gulp-rename');  // Renombra los archivos rename('app.css')

// Se define la tarea de ejecutar el scss y compilarlo a css.
gulp.task('style', function(){
  gulp
    .src('index.scss')          // Ruta del archivo al que se le va a aplicar la tarea.
    .pipe(sass())               // Lo q se va a hacer.
    .pipe(rename('app.css'))    // El nombre q va a tener el nuevo archivo.
    .pipe(gulp.dest('public')); // Donde se va a dejar.
});

gulp.task('assets', function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
});

// Se le da un nombre a la/s tareas.
gulp.task('default', ['style', 'assets']);