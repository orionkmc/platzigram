var page      = require('page');
var empty     = require('empty-element');
var title     = require('title');
var template  = require('./template');
var header    = require('../header');

// Librerias para ejecutar request http
//var request   = require('superagent');
//var axios     = require('axios');

page('/', header, loadPictures, function(ctx, next){
  title('Platzigram - Home');
  var main  = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
});

// Usando async await.
async function loadPictures(ctx, next){
    try{
      ctx.pictures = await fetch('/api/pictures').then(res => res.json());
      next();
    } catch (err){
        return console.log(err);
    }
}

/*
// Utilizando fetch (libreria nativa en los navegadores para hacer request http)
function loadPictures(ctx, next) {
  fetch('/api/pictures')
    .then(function(res){
      return res.json();
    })
    .then(function(pictures){
      ctx.pictures = pictures;
      next();
    }) 
    .catch(function(err){
      console.log(err);
    })
}
*/

/*
// Utilizando libreria axios
function loadPictures(ctx, next) {
  axios
    .get('/api/pictures')
    .then(function(res){
      ctx.pictures = res.data;
      next();
    })
    .catch(function(err){
      console.log(err);
    });
}
*/

/*
// Utilizando libreria superagent
function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function (err, res) {
      if (err) return console.log(err);

      ctx.pictures = res.body;
      next();
    })
}
*/