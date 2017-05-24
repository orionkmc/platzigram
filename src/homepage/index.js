var page      = require('page');
var empty     = require('empty-element');
var title     = require('title');
var template  = require('./template');

page('/', function(ctx, next){
  title('Platzigram - Home');
  var main  = document.getElementById('main-container');
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
  empty(main).appendChild(template(pictures));
});
