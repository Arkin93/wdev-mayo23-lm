var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";
let tablaresultado = document.querySelector('#tablaresultado');
let apiEliminar="BorrarCursos.php";
let apiactualizar="ActualizarCursos.php";
const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccessEditar = new bootstrap.Modal(document.getElementById('modalSuccessEditar'));

var url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

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
            error: function ( xhr, textStatus, errorThrown){
                    console.log("Error ", errorThrown);
                }            
        });
        }

        function ajustardatostabla(response){
        for (const objetoindividual of response) {
             tablaresultado.innerHTML +=`
                <tr class="table-primary">
                <td scope="row">${objetoindividual.id}</td>
                <td>${objetoindividual.nombre}</td>
                <td>${objetoindividual.descripcion}</td>
                <td>${objetoindividual.tiempo}</td>
                <td>${objetoindividual.usuario}</td>
                <td>
                    <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}', '${objetoindividual.nombre}', '${objetoindividual.descripcion}', '${objetoindividual.tiempo}')">Editar</a>
                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModalEliminar('${objetoindividual.id}')">Eliminar</a>
                </td>
                </tr>
        `;
    }
}
//Eliminar dato
function mostrarModalEliminar(id){
    eliminandoDato(id);
    myModalEliminar.show();
     
}

function eliminandoDato(id){
    var datosEnviar = {
        "id":id
    }
    
    apiurl = apibase + apiEliminar; 
    $.ajax({
        type: "POST",
        url: apiurl,
        data: JSON.stringify(datosEnviar),
        dataType: "JSON",
        success: function (response) {
            completeDelete();
        },
        error: function ( xhr, textStatus, errorThrown){
            console.log("Error ", errorThrown);
        }
    });

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        cargardatos();        
    }
}

//Editar dato
var urlActualizar = apibase + apiactualizar;
function mostrarEditarModal(id, nombre, descripcion, tiempo){
        $("#id").val(id);
        $("#nombre").val(nombre);
        $("#descripcion").val(descripcion);
        $("#tiempo").val(tiempo);
    myModalEditar.show();
}

$("#btnEditar").click(function (e) { 
    e.preventDefault();
    var datosEditar = {
        "id":$("#id").val(),
        "nombre":$("#nombre").val(),
        "descripcion":$("#descripcion").val(),
        "tiempo":$("#tiempo").val(),
        "usuario":"AlejandroRojas",
    }
    
    $.ajax({
        type: "POST",
        url: urlActualizar,
        data: JSON.stringify(datosEditar),
        dataType: "json",
        success: function (response) {
            success();
            console.log(response);
        },
        error: function( xhr, textStatus, errorThrown){
            console.log(error, errorThrown )
        }
    });
});

function success(){    
    modalSuccessEditar.hide();
    tablaresultado.innerHTML = ``;
    cargardatos();
    myModalEditar.hide();
}