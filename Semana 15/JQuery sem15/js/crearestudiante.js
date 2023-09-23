src="https://code.jquery.com/jquery-3.7.1.min.js"
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarEstudiantes.php";
var formularioEstudiante = document.getElementById('formularioEstudiante');
const myModalSuccess = new bootstrap.Modal(document.getElementById('myModalSuccess'))

formularioEstudiante.addEventListener('submit',function(e){
    e.preventDefault();
    var datosenviar = {
        "id": $("#id").val(),
        "cedula": $("#cedula").val(),
        "correoelectronico": $("#correoelectronico").val(),
        "telefono": $("#telefono").val(),
        "telefonocelular": $("#telefonocelular").val(),
        "fechanacimiento": $("#fechanacimiento").val(),
        "sexo": $("#sexo").val(),
        "direccion": $("#direccion").val(),
        "nombre": $("#nombre").val(),
        "apellidopaterno": $("#apellidopaterno").val(),
        "apellidomaterno": $("#apellidomaterno").val(),
        "nacionalidad": $("#nacionalidad").val(),
        "idCarreras": $("#idCarreras").val(),
        "usuario": "Alejandro Rojas"
    }
    console.log(datosenviar);
    apiurl = apibase + apicrear;
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosenviar),
        dataType: "json",
        success: function (response) {
            completeInsert();
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }            
    });
})

function completeInsert(){
    window.location = 'listaestudiante.html';
}
