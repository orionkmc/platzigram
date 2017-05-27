var page      = require('page');
var empty     = require('empty-element');
var title     = require('title');
var template  = require('./template');
var header    = require('../header');
var Webcam    = require('webcamjs');
var picture   =  require('../picture-card');

// Librerias para ejecutar request http
//var request   = require('superagent');
//var axios     = require('axios');

page('/', header, leading, loadPictures, function(ctx, next){
  title('Platzigram - Home');
  var main  = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));

  const picturePreview  = $('#picture-preview');
  const camaraInput     = $('#camara-input');
  const cancelPicture   = $('#cancelPicture');
  const shootButton     = $('#picture-shoot');
  const uploadButton    = $('#uploadButton');

  function reset(){
    picturePreview.addClass('hide');
    cancelPicture.addClass('hide');
    uploadButton.addClass('hide');
    shootButton.removeClass('hide');
    camaraInput.removeClass('hide');
  }

  cancelPicture.click(reset);

  $('.modal-trigger').leanModal({
    ready: function(){
      Webcam.attach( '#camara-input' );
      shootButton.click((ev) => {
        Webcam.snap((data_uri) => {
          picturePreview.html(`<img src="${data_uri}"/>`);
          picturePreview.removeClass('hide');
          cancelPicture.removeClass('hide');
          shootButton.addClass('hide');
          camaraInput.addClass('hide');
          uploadButton.removeClass('hide');
          uploadButton.off('click');
          uploadButton.click(() => {
            const pic = {
              url: data_uri,
              likes: 0,
              liked: false,
              createdAt: +new Date(),
              user: {
                username: 'kuai-mare',
                avatar: 'https://pbs.twimg.com/profile_images/541801670397550592/yEdF9WuK_400x400.jpeg'
              }
            }
            $('#picture-card').prepend(picture(pic));
            reset();
            Webcam.reset();
            $('#modalCamara').closeModal();
          });
        });
      });
    },
    complete: function(){
      Webcam.reset();
      reset();
    }
  });
});

function leading(ctx, next){
  var el = document.createElement('div');
  el.classList.add('loader');
  document.getElementById('main-container').appendChild(el);
  next();
}

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