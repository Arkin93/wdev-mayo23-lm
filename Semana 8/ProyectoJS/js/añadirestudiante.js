var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarEstudiantes.php";

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = {
        "cedula":document.getElementById('cedula').value,
        "correoelectronico":document.getElementById('correoelectronico').value,
        "telefono":document.getElementById('telefono').value,
        "telefonocelular":document.getElementById('telefonocelular').value,
        "fechanacimiento":document.getElementById('fechanacimiento').value,
        "sexo":document.getElementById('sexo').value,
        "direccion":document.getElementById('direccion').value,
        "nombre":document.getElementById('nombre').value,
        "apellidopaterno":document.getElementById('apellidopaterno').value,
        "apellidomaterno":document.getElementById('apellidomaterno').value,
        "nacionalidad":document.getElementById('nacionalidad').value,
        "idCarreras":document.getElementById('idCarreras').value,
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