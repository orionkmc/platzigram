var express = require('express');

var app = express();

// Directorio donde se encuentran los archivos de plantilla.
app.set('views', './views');

// Motor de plantilla que se utiliza
app.set('view engine', 'pug');

// Se define la ruta de los archivos estaticos
app.use(express.static('public'));

// Se definen las url
app.get('/', function(req, res){
  res.render('index');
});

// Se lanza el servidor en el puerto especificado
app.listen(3000, function (err){
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('escuchando en el puerto 3000');
});