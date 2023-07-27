var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";
var apieliminar = "BorrarCursos.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));


let tablaresultado = document.querySelector('#tablaresultado');

function consultardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultar ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostabla(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
       tablaresultado.innerHTML += `
            <tr class="table-primary">
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.descripcion}</td>
                                <td>${objetoindividual.tiempo}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
       `;
    }   
}


    function mostrarModal(id){

        eliminandodato(id);

        myModalEliminar.show();
        
    }

    function eliminandodato(id){

        var datosEnviar = { 
            "id":id 
        }

        apiurl = apibase + apieliminar ;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
                completeDelete()
            })
        .catch(console.log);
    }

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        consultardatos();
        
    }

consultardatos();