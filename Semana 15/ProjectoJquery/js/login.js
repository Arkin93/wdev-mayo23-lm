var crear = "https://paginas-web-cr.com/ApiPHP/apis/AutenticarUsuario.php";

$("#Enviar").click(function (e) { 
    e.preventDefault();
    crearDatos();
});

function crearDatos(){
var datosEnviar = {
email: $("#email").val(),
password: $("#password").val(),
}

$.ajax({
type: "POST",
url: crear,
data: JSON.stringify(datosEnviar),
dataType: "json",
success: function (response) {
    completeInsert();
},
error: function(xhr, textstatus, errorthrown){
    console.log("Error ", errorthrown);
}
});
}

function completeInsert(){
    window.location = 'index.html';
}