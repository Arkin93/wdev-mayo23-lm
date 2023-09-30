var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarUsuarios.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarUsuarios.php";

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
        // console.log(response.data);
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
        name: $("#nameCrear").val(),
        email: $("#emailCrear").val(),
        password: $("#passwordCrear").val(),
    }

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


function mostrarEditarModal (id, name, email, password){
    $("#id").val(id);
    $("#nameEditar").val(name);
    $("#emailEditar").val(email);
    $("#passwordEditar").val(password);
    myModalEditar.show();
}

$("#Actualizar").click(function (e) { 
    e.preventDefault();
    var datosEditar = {
        id: $("#id").val(),
        name: $("#nameEditar").val(),
        email: $("#emailEditar").val(),
        password: $("#passwordEditar").val(),
        usuario: "Arkin",
    }
console.log(datosEditar.data);
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