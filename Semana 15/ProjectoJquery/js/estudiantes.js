var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php";
var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById("myModalEliminar"));
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
                        <a name="Editar" id="Editar" class="btn btn-warning"role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.nacionalidad}','${objetoindividual.direccion}','${objetoindividual.correoelectronico}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.idCarreras}')">Editar</a>
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
            cedula: $("#cedulaCrear").val(),
            nombre: $("#nombreCrear").val(),
            apellidopaterno: $("#apellidopaternoCrear").val(),
            apellidomaterno: $("#apellidomaternoCrear").val(),
            nacionalidad: $("#nacionalidadCrear").val(),
            direccion: $("#direccionCrear").val(),
            correoelectronico: $("#correoelectronicoCrear").val(),
            telefono: $("#telefonoCrear").val(),
            telefonocelular: $("#telefonocelularCrear").val(),
            fechanacimiento: $("#fechanacimientoCrear").val(),
            sexo: $("#sexoCrear").val(),
            idCarreras: $("#idCarrerasCrear").val(),
            usuario: "Arkin",
        }
        console.log(datosEnviar);
    
        $.ajax({
            type: "POST",
            url: crear,
            data: JSON.stringify(datosEnviar),
            dataType: "json",
            success: function (response) {
                completeInsert();
                console.log(response);
                
            },
            error: function(xhr, textstatus, errorthrown){
                console.log("Error ", errorthrown);
        }
    });
    }

    function completeInsert(){
        myModalCrear.hide();
    tablaresultado.innerHTML = ``;
    cargarDatos();
}


    function mostrarEditarModal (id, cedula, nombre, apellidopaterno, apellidomaterno, nacionalidad, direccion, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, idCarreras){
        $("#id").val(id);
        $("#cedulaEditar").val(cedula),
        $("#nombreEditar").val(nombre),
        $("#apellidopaternoEditar").val(apellidopaterno),
        $("#apellidomaternoEditar").val(apellidomaterno),
        $("#nacionalidadEditar").val(nacionalidad),
        $("#direccionEditar").val(direccion),
        $("#correoelectronicoEditar").val(correoelectronico),
        $("#telefonoEditar").val(telefono),
        $("#telefonocelularEditar").val(telefonocelular),
        $("#fechanacimientoEditar").val(fechanacimiento),
        $("#sexoEditar").val(sexo),
        $("#idCarrerasEditar").val(idCarreras);
        myModalEditar.show();
    }

    $("#Actualizar").click(function (e) { 
        e.preventDefault();
        var datosEditar = {
            "id": $("#id").val(),
            "cedula": $("#cedulaEditar").val(),
            "nombre": $("#nombreEditar").val(),
            "apellidopaterno": $("#apellidopaternoEditar").val(),
            "apellidomaterno": $("#apellidomaternoEditar").val(),
            "nacionalidad": $("#nacionalidadEditar").val(),
            "direccion": $("#direccionEditar").val(),
            "correoelectronico": $("#correoelectronicoEditar").val(),
            "telefono": $("#telefonoEditar").val(),
            "telefonocelular": $("#telefonocelularEditar").val(),
            "fechanacimiento": $("#fechanacimientoEditar").val(),
            "sexo": $("#sexoEditar").val(),
            "idCarreras": $("#idCarrerasEditar").val(),
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
