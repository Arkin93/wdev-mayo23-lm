var crear = "https://paginas-web-cr.com/ApiPHP/apis/SendPassword.php";

$("#Enviar").click(function (e) { 
    e.preventDefault();
    crearDatos();
});

function crearDatos(){
var datosEnviar = {
email: $("#email").val(),
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
    window.location = 'login.html';
}