// var formulario = $('formulario');
// const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))
// const myModalEliminar = new bootstrap.Modal(document.getElementById("myModalEliminar"))
const myModalEditar = document.getElementById('myModalEditar');
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php";
var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";


$(document).ready(function () {
$("#enviar").click(function (e) { 
    e.preventDefault();
    añadirEstudiante();
    });
});

function añadirEstudiante(){
    var formulario = {
        cedula: $("#cedula").val(),
        nombre: $("#nombre").val(),
        apellidopaterno: $("#apellidopaterno").val(),
        apellidomaterno: $("#apellidomaterno").val(),
        nacionalidad: $("#nacionalidad").val(),
        direccion: $("#direccion").val(),
        correoelectronico: $("#correoelectronico").val(),
        telefono: $("#telefono").val(),
        telefonocelular: $("#telefonocelular").val(),
        fechanacimiento: $("#fechanacimiento").val(),
        sexo: $("#sexo").val(),
        idCarreras: $("#idCarreras").val(),
        usuario: "Arkin",
    }
    console.log(formulario);

    $.ajax({
        type: "POST",
        url: crear,
        data: JSON.stringify(formulario),
        dataType: "json",
        success: function (response) {
            // modalSuccess.show()
            console.log(response);
            completeInsert();
        },
        error: function(xhr, textstatus, errorthrown){
            console.log("Error ", errorthrown);
    }
});
}

$(document).ready(function () {
    cargardatos();
});

function cargardatos(){
$.ajax({
    type: "POST",
    url: listar,
    dataType: "json",
    success: function (response) {
        ajustardatostabla(response.data);
    },

    error: function(xhr, textstatus, errorthrown){
        console.log("Error ", errorthrown);
    }
});
}


function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
        tablaresultado.innerHTML += `
        <tr class="table-success" >
                        <td scope="row">${objetoindividual.id}</td>
                        <td>${objetoindividual.cedula}</td>
                        <td>${objetoindividual.nombre}</td>
                        <td>${objetoindividual.apellidopaterno}</td>
                        <td>${objetoindividual.apellidomaterno}</td>
                        <td>${objetoindividual.nacionalidad}</td>
                        <td>${objetoindividual.direccion}</td>
                        <td>${objetoindividual.correoelectronico}</td>
                        <td>${objetoindividual.telefono}</td>
                        <td>${objetoindividual.telefonocelular}</td>
                        <td>${objetoindividual.fechanacimiento}</td>
                        <td>${objetoindividual.sexo}</td>
                        <td>${objetoindividual.idCarreras}</td>
                        <td>${objetoindividual.usuario}</td>
                        <td>
                        <a name="Editar" id="Editar" class="btn btn-warning"role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.correoelectronico}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}')">Editar</a>
                        ||
                        <a name="Eliminar" id="Eliminar" class="btn btn-danger"role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                        </td>
                    </tr>
        `
    }}


    formulario.addEventListener('editar', function(e)
    {
        e.preventDefault();
        
        var formulario = {
            cedula: $("#cedula").val(),
            nombre: $("#nombre").val(),
            apellidopaterno: $("#apellidopaterno").val(),
            apellidomaterno: $("#apellidomaterno").val(),
            nacionalidad: $("#nacionalidad").val(),
            direccion: $("#direccion").val(),
            correoelectronico: $("#correoelectronico").val(),
            telefono: $("#telefono").val(),
            telefonocelular: $("#telefonocelular").val(),
            fechanacimiento: $("#fechanacimiento").val(),
            sexo: $("#sexo").val(),
            idCarreras: $("#idCarreras").val(),
            usuario: "Arkin",
        }
        myModalEditar.show();
        console.log(formulario);
    
        $.ajax({
            type: "POST",
            url: crear,
            data: JSON.stringify(formulario),
            dataType: "json",
            success: function (response) {
                // modalSuccess.show()
                console.log(response);
            },
            error: function(xhr, textstatus, errorthrown){
                console.log("Error ", errorthrown);
        }
    });
    })



//     function mostrarModal(id){
//         eliminandodato(id);
//         myModalEliminar.show();
//     }

//     $("#enviar").click(function (e) { 
//         eliminandodato();
//     });

//     function eliminandodato(id){

// $.ajax({
//             type: "method",
//             url: borrar,
//             data: JSON.stringify(formulario),
//             success: function (response) {
//                 completeInsert()
//             }
//         });
//     }

//     function completeDelete(){
//         myModalEliminar.hide();
//         tablaresultado.innerHTML = ``;
//     }


function completeInsert(){
    window.location = 'estudiantes.html';
}
