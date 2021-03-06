import page   from 'page';
import header from '../header';
import title  from 'title';
import empty  from 'empty-element';
import template from './template';

page('/:username', header, loadUser, function(ctx, next){
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
});

page('/:username/:id', header, loadUser, function(ctx, next){
  var main = document.getElementById('main-container');
  title(`Platzigram - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
  $(`#modal${ctx.params.id}`).openModal({
        dismissible: true,
        opacity: .5,
        complete: function() {
            const path = `/${ctx.params.username}`;
            page(path);
        }
    });
});

async function loadUser(ctx, next){
  try{
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  }
  catch(err) {
    return console.log(err);
  }
}