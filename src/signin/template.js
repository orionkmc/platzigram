var yo      = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form action="" class="signup-form">
                <div class="section">
                    <a href="" class="btn btn-fb hide-on-small-only">Inicia con Facebook</a>
                    <a href="" class="btn btn-fb hide-on-med-and-up">
                        Inicia
                    </a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="username" placeholder="Nombre">
                    <input type="password" name="password" placeholder="contraseña">
                    <button class="btn btn-signup waves-effect waves-light" type="submit">iniciar</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ¿No tienes cuenta?
            <a href="/signup">Registrate</a>
        </div>
    </div>
</div>`;

module.exports = landing(signinForm);