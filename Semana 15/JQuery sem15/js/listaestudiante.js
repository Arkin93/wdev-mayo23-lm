var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
var apiborrar = "BorrarEstudiantes.php";
var apiactualizar = "ActualizarEstudiantes.php"
const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));

var tablaresult = document.querySelector('#tablaresultado')


$(document).ready(function () {
    cargardatos();
});

function cargardatos() {
    apiurl = apibase + apiconsultar;
    $.ajax({
        type: "POST",
        url: apiurl,
        dataType: "json",
        success: function (response) {
            ajustardatostabla(response.data);
            console.log(response);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("Error ", errorThrown);
        }
    });
}

function ajustardatostabla(datos) {
    console.log("datos" + datos);
    for (const objetoindividual of datos) {

        tablaresultado.innerHTML += `
        <tr class="table-warning" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.cedula}</td>
                                <td>${objetoindividual.correoelectronico}</td>
                                <td>${objetoindividual.telefono}</td>
                                <td>${objetoindividual.telefonocelular}</td>
                                <td>${objetoindividual.fechanacimiento}</td>
                                <td>${objetoindividual.sexo}</td>
                                <td>${objetoindividual.direccion}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.apellidopaterno}</td>
                                <td>${objetoindividual.apellidomaterno}</td>
                                <td>${objetoindividual.nacionalidad}</td>
                                <td>${objetoindividual.idCarreras}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>
                                <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.correoelectronico}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}',
                                '${objetoindividual.sexo}','${objetoindividual.direccion}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.idCarreras}')">Editar</a>
                                ||
                                <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>
                            </tr>
        `;
    }

}

// Elimando datos

function mostrarModal(id) {
    eliminandodato(id);

    myModalEliminar.show();
}

function eliminandodato(id) {
    var datosenviar = {
        "id": id
    }
    apiurl = apibase + apiborrar;
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosenviar),
        dataType: "JSON",
        success: function (response) {
            completeDelete();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("Error ", errorThrown);
        }
    });
}
function completeDelete() {
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    cargardatos();
}

// Editar datos
function mostrarEditarModal(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras) {
    $("#id").val(id);
    $("#cedula").val(cedula);;
    $("#correoelectronico").val(correoelectronico);
    $("#telefono").val(telefono);
    $("#telefonocelular").val(telefonocelular);
    $("#fechanacimiento").val(fechanacimiento);
    $("#sexo").val(sexo);
    $("#direccion").val(direccion);
    $("#nombre").val(nombre);
    $("#apellidopaterno").val(apellidopaterno);
    $("#apellidomaterno").val(apellidomaterno);
    $("#nacionalidad").val(nacionalidad);
    $("#idCarreras").val(idCarreras);

    myModalEditar.show();
}

$("#btnEditar").click(function (e) { 
    e.preventDefault();
    var datoseditar = {
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
    apiurl = apibase + apiactualizar;
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datoseditar),
        dataType: "json",
        success: function (response) {
            completeEdit();
            console.log(response);
        },
        error: function( xhr, textStatus, errorThrown){
            console.log(error, errorThrown )
        }
    });
});
function completeEdit() {
    myModalEditar.hide();
    tablaresultado.innerHTML = ``;
    cargardatos();
}