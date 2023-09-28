var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById("myModalEliminar"));
const myModalEditar = new bootstrap.Modal(document.getElementById("myModalEditar"));
const myModalCrear = new bootstrap.Modal(document.getElementById('myModalCrear'));

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
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
        tablaresultado.innerHTML += `
        <tr class="table-light" >
                        <td scope="row">${objetoindividual.id}</td>
                        <td>${objetoindividual.nombre}</td>
                        <td>
                        <a name="Editar" id="Editar" class="btn btn-warning"role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}')">Editar</a>
                        ||
                        <a name="Eliminar" id="Eliminar" class="btn btn-danger"role="button" onclick="mostrarEliminarModal('${objetoindividual.id}')">Eliminar</a>
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
                        nombre: $("#nombreCrear").val(),
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
       
        

    function mostrarEditarModal(id, nombre){
        $("#id").val(id);
        $("#nombreEditar").val(nombre);
        myModalEditar.show();
    }


        $("#Actualizar").click(function (e) { 
            e.preventDefault();
            var datosEditar = {
                id: $("#id").val(),
                nombre: $("#nombreEditar").val(),
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

    function completeEdit(){
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