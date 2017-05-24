var page      = require('page');
var empty     = require('empty-element');
var title     = require('title');
var template  = require('./template');

page('/', function(ctx, next){
  title('Platzigram - Home');
  var main  = document.getElementById('main-container');
  main.innerHTML = 'Home <a href="/signup">Signup</a> <a href="/signin">Signin</a>';
  empty(main).appendChild(template);
});
