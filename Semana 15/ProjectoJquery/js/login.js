var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "AutenticarUsuario.php";

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = {
        "email":document.getElementById('email').value,
        "password":document.getElementById('password').value,
    }

    console.log(datosEnviar);
    apiurl = apibase + apicrear;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            // modalSuccess.show()
            completeInsert()
    })
    .catch(console.log);
});

function completeInsert(){
    window.location = 'index.html';
}