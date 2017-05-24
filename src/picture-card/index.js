var yo = require('yo-yo');

module.exports = function (picture) {
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${picture.url}">
      </div>
      <div class="card-content">
        <a href="/user/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
        </a>
        <small class="right time">${picture.createdAt}</small>
        <p>
          <a class="left" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${picture.likes} Me gusta</span>
        </p>
      </div>
    </div>`;
  }