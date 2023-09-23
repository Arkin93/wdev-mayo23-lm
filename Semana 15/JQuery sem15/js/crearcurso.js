src="https://code.jquery.com/jquery-3.7.1.min.js"

var formulario = document.getElementById('formulario');

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarCursos.php";
const myModalInsertar = new bootstrap.Modal(document.getElementById('myModalInsertar'));
var url = apibase + apicrear;

formulario.addEventListener('submit', function(e)
{
    
    e.preventDefault();
    var datosEnviar = { 
        "nombre":$('#nombre').val(),
        "descripcion":$('#descripcion').val(),
        "tiempo":$('#tiempo').val(),
        "usuario":"AlejandroRojas",       
    }
    enviardatos(datosEnviar);

    function enviardatos(datosEnviar) {
        $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(datosEnviar),
        dataType: "json",
        success: function (response) {
            completeInsert();
            console.log(response);
        },
        error: function ( xhr, textStatus, errorThrown){
                console.log("Error ", errorThrown);
            }            
    });
    }
        
});

   function completeInsert(){
    window.location = 'listarcurso.html';
    myModalInsertar.show();
    }
