var yo      = require('yo-yo');
var layout  = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate').message;
var request = require('superagent');

module.exports = function(pictures){
  var el = yo`<div class="container timeline">
    <div class="row">  
      <div id="modalCamara" class="modal center-align" style="margin:auto;">
        <div class="modal-content">
          <div id="camara-input" class="camara-picture" style="width:320px; height:240px;"></div>
          <div id="picture-preview" class="camara-picture hide"></div>
        </div>
        <div class="modal-footer">
          <button class="waves-effect waves-light btn" id="picture-shoot">
            <i class="fa fa-camera"></i>
          </button>
          <button class="waves-effect waves-light cyan btn hide" id="uploadButton">
            <i class="fa fa-cloud-upload"></i>
          </button>
          <button class="waves-effect waves-light red btn hide" id="cancelPicture">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
          <a href="" class="waves-effect waves-light btn modal-trigger" href="#modalCamara">
            <i class="fa fa-camera"></i>
          </a>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-cloud-upload" aria-hidden="true"></i> ${translate('upload-picture')}</span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3" id="picture-card">
        ${pictures.map(function (pic) {
          return picture(pic);
        })}
      </div>
    </div>
  </div>`;

  function toggleButtons(){
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function cancel(){
    toggleButtons();
    document.getElementById('formUpload').reset();
  }

  function onchange(){
    toggleButtons();
  }
  
  function onsubmit(ev) {
    ev.preventDefault();

    var data = new FormData(this);
      request
        .post('/api/pictures')
        .send(data)
        .end(function (err, res) {
          console.log(arguments);
        });
  }

  return layout(el);
}