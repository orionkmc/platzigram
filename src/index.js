var page = require('page');
var main = document.getElementById('main-container');

page('/', function(ctx, next){
  main.innerHTML = 'Home <a href="/signup">Signup</a> <a href="/signin">Signin</a>';
});

page('/signup', function(ctx, next){
  main.innerHTML = '<a href="/">Home</a> Signup <a href="/signin">Signin</a>';
});

page('/signin', function(ctx, next){
  main.innerHTML = '<a href="/">Home</a> <a href="/signup">Signup</a> Signin';
});

page();