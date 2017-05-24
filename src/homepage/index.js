var page      = require('page');
var empty     = require('empty-element');
var title     = require('title');
var template  = require('./template');
var request   = require('superagent');

page('/', loadPictures, function(ctx, next){
  title('Platzigram - Home');
  var main  = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function (err, res) {
      if (err) return console.log(err);

      ctx.pictures = res.body;
      next();
    })
}