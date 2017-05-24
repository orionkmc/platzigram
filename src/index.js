var page  = require('page');

require('./homepage');
require('./signup');
require('./signin');

page();
/*page('/signin', function(ctx, next){
  main.innerHTML = '<a href="/">Home</a> <a href="/signup">Signup</a> Signin';
});*/