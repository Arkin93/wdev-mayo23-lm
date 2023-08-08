var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarEstudiantes.php";

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = {
        "cedula":document.getElementById('cedula').value,
        "email":document.getElementById('email').value,
        "telefono":document.getElementById('telefono').value,
        "celular":document.getElementById('celular').value,
        "nacimiento":document.getElementById('nacimiento').value,
        "direccion":document.getElementById('direccion').value,
        "nombre":document.getElementById('nombre').value,
        "primerapellido":document.getElementById('primerapellido').value,
        "segundoapellido":document.getElementById('segundoapellido').value,
        "nacionalidad":document.getElementById('nacionalidad').value,
        "usuario":"Arkin"
    }

    apiurl = apibase + apicrear;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            modalSuccess.show()
            completeInsert()
    })
    .catch(console.log);
});

function completeInsert(){
    window.location = 'listarestudiantes.html';
}