var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php";
var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById("myModalEliminar"))
const myModalEditar = new bootstrap.Modal(document.getElementById("myModalEditar"));
const myModalCrear = new bootstrap.Modal(document.getElementById("myModalCrear"));

let tablaresultado = document.querySelector('#tablaresultado');

$(document).ready(function () {
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
    for (const objetoindividual of datos) {
        tablaresultado.innerHTML += `
        <tr class="table-light" >
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
                        <a name="Eliminar" id="Eliminar" class="btn btn-danger"role="button" onclick="mostrarEliminarModal('${objetoindividual.id}')">Eliminar</a>
                        </td>
                    </tr>
        `;
    }}



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
        console.log(datosEnviar);
    
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


    function mostrarEditarModal (id, cedula, nombre, apellidopaterno, apellidomaterno, nacionalidad, direccion, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, idCarreras){
        $("#id").val(id);
        $("#cedula").val(cedula),
        $("#nombre").val(nombre),
        $("#apellidopaterno").val(apellidopaterno),
        $("#apellidomaterno").val(apellidomaterno),
        $("#nacionalidad").val(nacionalidad),
        $("#direccion").val(direccion),
        $("#correoelectronico").val(correoelectronico),
        $("#telefono").val(telefono),
        $("#telefonocelular").val(telefonocelular),
        $("#fechanacimiento").val(fechanacimiento),
        $("#sexo").val(sexo),
        $("#idCarreras").val(idCarreras);
        myModalEditar.show();
    }

    $("#Actualizar").click(function (e) { 
        e.preventDefault();
        var datosEditar = {
            "id": $("#id").val(),
            "cedula": $("#cedula").val(),
            "nombre": $("#nombre").val(),
            "apellidopaterno": $("#apellidopaterno").val(),
            "apellidomaterno": $("#apellidomaterno").val(),
            "nacionalidad": $("#nacionalidad").val(),
            "direccion": $("#direccion").val(),
            "correoelectronico": $("#correoelectronico").val(),
            "telefono": $("#telefono").val(),
            "telefonocelular": $("#telefonocelular").val(),
            "fechanacimiento": $("#fechanacimiento").val(),
            "sexo": $("#sexo").val(),
            "idCarreras": $("#idCarreras").val(),
            "usuario": "Arkin"
        }

    $.ajax({
        type: "POST",
        url: editar,
        data: JSON.stringify(datosEditar),
        dataType: "json",
        success: function (response) {
            completeEdit();
            console.log(response);
            // modalSuccess.show()
            // completeInsert();
        },
        error: function(xhr, textstatus, errorthrown){
            console.log("Error ", errorthrown);
    }
});
});

function completeEdit() {
    myModalEditar.hide();
    tablaresultado.innerHTML = ``;
    cargarDatos();
}

    function mostrarEliminarModal(id){
        eliminarDato(id);
        myModalEliminar.show();
    }

    function eliminarDato(id){
        var datosEliminar = {
            "id":id
        }
    
        $.ajax({
            type: "POST",
            url: eliminar,
            data: JSON.stringify(datosEliminar),
            dataType: "json",
            success: function (response) {
                completeDelete();
                console.log(response);
                // modalSuccess.show()
            },
            error: function(xhr, textstatus, errorthrown){
                console.log("Error ", errorthrown);
        }
    });
}

function completeDelete() {
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    cargarDatos();
}  

function completeInsert(){
    window.location = 'estudiantes.html';
}
