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
  res.render('index', { title: 'Platzigram - Home' });
});

app.get('/signup', function(req, res){
  res.render('index', { title: 'Platzigram - Signin' });
});

app.get('/signin', function(req, res){
  res.render('index', { title: 'Platzigram - Signup' });
});

app.get('/api/pictures', function(req, res, next){
  var pictures = [
      {
        user: {
          username: 'Kuai-mare',
          avatar: 'https://pbs.twimg.com/profile_images/541801670397550592/yEdF9WuK_400x400.jpeg'
        },
        url: 'office.jpg',
        likes: 15,
        liked: false,
        createdAt: new Date().getTime()
      },
      {
        user: {
          username: 'Arturo',
          avatar: 'https://pbs.twimg.com/profile_images/500645664867778560/MNCJkvbD_400x400.jpeg'
        },
        url: 'office.jpg',
        likes: 5,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
      }
    ];

    setTimeout(function(){
      res.send(pictures);
    }, 2000);
  })
// Se lanza el servidor en el puerto especificado
app.listen(3000, function (err){
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('escuchando en el puerto 3000');
});