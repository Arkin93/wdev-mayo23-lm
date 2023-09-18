// var formulario = document.getElementById('formulario');
// const myModalSuccess = new bootstrap.Modal(document.getElementById('myModalSuccess'))
const myModalEditar = new bootstrap.Modal(document.getElementById("myModalEditar"));
const myModalCrear = new bootstrap.Modal(document.getElementById("myModalCrear"));
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";

$(document).ready(function () {
    let tablaresultado = document.querySelector('#tablaresultado');
    cargarDatos();
});

function cargarDatos(){
$.ajax({
    type: "POST",
    url: listar,
    dataType: "json",
    success: function (response) {
        console.log(response.data);
        ajustarDatosTabla(response.data);
    },

    error: function(xhr, textstatus, errorthrown){
        console.log("Error ", errorthrown);
    }
});
}


function ajustarDatosTabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {

        tablaresultado.innerHTML += `
        <tr class="table-light" >
                        <td scope="row">${objetoindividual.id}</td>
                        <td>${objetoindividual.name}</td>
                        <td>${objetoindividual.email}</td>
                        <td>${objetoindividual.password}</td>
                        <td>
                        <a name="Editar" id="Editar" class="btn btn-warning"role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.name}','${objetoindividual.email}','${objetoindividual.password}')">Editar</a>
                        
                        </td>
                    </tr>
        `

        }
    }


    function mostrarCrearModal(){
        myModalCrear.show();
    }
    
    $("#Crear").click(function (e) { 
        e.preventDefault();
        mostrarCrearModal();
        });
    
        $("#Enviar").click(function (e) { 
            e.preventDefault();
            crearDatos();
        });

    function crearDatos(){
    var datosEnviar = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
    }

    $.ajax({
        type: "POST",
        url: crear,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            console.log(response);
            // modalSuccess.show()
            completeInsert();
        },
        error: function(xhr, textstatus, errorthrown){
            console.log("Error ", errorthrown);
    }
});
}


function mostrarEditarModal (id, name, email, password){
    $("#id").val(id);
    $("#name").val(name);
    $("#email").val(email);
    $("#password").val(password);
    myModalEditar.show();
}

$("#Editar").click(function (e) { 
    e.preventDefault();
    mostrarEditarModal();
});

$("#Actualizar").click(function (e) { 
    e.preventDefault();
    var datosEditar = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        usuario: "Arkin",
    }
console.log(datosEditar.data);
$.ajax({
    type: "POST",
    url: editar,
    data: JSON.stringify(datosEditar),
    dataType: "json",
    success: function (response) {
        console.log(response);
        // modalSuccess.show()
        // completeInsert();
    },
    error: function(xhr, textstatus, errorthrown){
        console.log("Error ", errorthrown);
}
});
});



function completeInsert(){
    window.location = 'usuarios.html';
}