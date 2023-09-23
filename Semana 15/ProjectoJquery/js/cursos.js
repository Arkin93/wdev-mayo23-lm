// var formulario = document.getElementById('formulario');
// const myModalSuccess = new bootstrap.Modal(document.getElementById('myModalSuccess'))
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";
var crear = "https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php";
var editar = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php";
var eliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";

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
        ajustarDatosTabla(response.data);
        console.log(response);
    },

    error: function(xhr, textstatus, errorthrown){
        console.log("Error ", errorthrown);
    }
});
}

    function ajustarDatosTabla(datos){
        console.log("datos"+datos);
        for (const objetoindividual of datos) {
            // console.log(objetoindividual);
            tablaresultado.innerHTML += `
            <tr class="table-light" >
                            <td scope="row">${objetoindividual.id}</td>
                            <td>${objetoindividual.nombre}</td>
                            <td>${objetoindividual.descripcion}</td>
                            <td>${objetoindividual.tiempo}</td>
                            <td>${objetoindividual.usuario}</td>
                            <td>
                            <a name="Editar" id="Editar" class="btn btn-warning"role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
                            ||
                            <a name="Eliminar" id="Eliminar" class="btn btn-danger"role="button" onclick="mostrarEliminarModal('${objetoindividual.id}')">Eliminar</a>
                            </td>
                        </tr>
            `;
    
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
                        "nombre": $("#nombre").val(),
                        "descripcion": $("#descripcion").val(),
                        "tiempo": $("#tiempo").val(),
                        "usuario": "Arkin",
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



        function mostrarEditarModal (id, nombre, descripcion, tiempo){
            $("#id").val(id);
            $("#nombre").val(nombre);
            $("#descripcion").val(descripcion);
            $("#tiempo").val(tiempo);
            myModalEditar.show();
        }

        $("#Actualizar").click(function (e) { 
            e.preventDefault();
            var datosEditar = {
                "id": $("#id").val(),
                "nombre": $("#nombre").val(),
                "descripcion": $("#descripcion").val(),
                "tiempo": $("#tiempo").val(),
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
    

        function mostrarEliminarModal(){
            myModalEliminar.show();
        }

    
$("#Borrar").click(function (id) { 
    eliminarDato(id);
});

        function eliminarDato(id){
            var datosEliminar = {
                "id": id
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


        function completeDelete(){
            myModalEliminar.hide();
            tablaresultado.innerHTML = ``;
            cargarDatos();
        }

function completeInsert(){
    window.location = 'cursos.html';
}