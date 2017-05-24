var page  = require('page');
var empty = require('empty-element');

page('/', function(ctx, next){
  var main  = document.getElementById('main-container');
  main.innerHTML = 'Home <a href="/signup">Signup</a> <a href="/signin">Signin</a>';
});
