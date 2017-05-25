var gulp        = require('gulp');        // Libreria Gulp
var sass        = require('gulp-sass');   // Sass automatizado con gulp
var rename      = require('gulp-rename'); // Renombra los archivos rename('app.css')
var babel       = require('babelify');    // Transforma el codigo escrito en ES6 a codigo legible por todos los navegadores.
var browserify  = require('browserify');  // Gestiona las dependencias de librerias de terceros.
var source      = require('vinyl-source-stream'); // Une todos los modulos requeridos en un solo archivo js.
var watchify     = require('watchify');             // 

// Se define la tarea de ejecutar el scss y compilarlo a css.
gulp.task('style', function(){
  gulp
    .src('index.scss')          // Ruta origen de los archivo a transpilar a css.
    .pipe(sass())               // Lo q se va a hacer.
    .pipe(rename('app.css'))    // El nombre q va a tener el nuevo archivo.
    .pipe(gulp.dest('public')); // Ruta destino del archivo.
});

// Genera todos los archivos q se encuentran en assets al directorio public.
gulp.task('assets', function(){
  gulp
    .src('assets/*')            // Ruta origen de los archivos.
    .pipe(gulp.dest('public')); // Ruta destino de los archivos.
});

// Transpila codigo JavaScript
gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel,{presets:[ 'es2015' ], plugins: [ 'syntax-async-functions' ]}) // Transforma el codigo escrito en ES6 a codigo legible por todos los navegadores.
    .bundle()                   // Procesa y genera el archivo.
    .on('error', function(err){ console.log(err); this.emit('end') }) // procesa posibles errores.
    .pipe(source('index.js'))   // Archivo q va a transformar.
    .pipe(rename('app.js'))     // El nuevo nombre del archivo.
    .pipe(gulp.dest('public'))  // Destino del nuevo archivo.
  });

// Lista de tareas ejecutar
gulp.task('default', ['style', 'assets', 'scripts']);

//gulp.task('default', ['style', 'assets', 'build']);

/*
function compile(watch){
  var bundle = browserify('./src/index.js');

  if (watch) {
    
    bundle = watchify(bundle);
    bundle.on('update', function(){
      console.log('----> Bundling...');
      rebundle();
    });
  }

  function rebundle(){
  bundle
    .transform(babel)           // Transforma el codigo escrito en ES6 a codigo legible por todos los navegadores.
    .bundle()                   // Procesa y genera el archivo.
    .on('error', function(err){ console.log(err); this.emit('end') })
    .pipe(source('index.js'))   // Archivo q va a transformar.
    .pipe(rename('app.js'))     // El nuevo nombre del archivo.
    .pipe(gulp.dest('public'))  // Destino del nuevo archivo.
  }

  rebundle();
}
*/
//gulp.task('build', function(){ return compile(); });
//gulp.task('watch', function(){ return compile(true); });