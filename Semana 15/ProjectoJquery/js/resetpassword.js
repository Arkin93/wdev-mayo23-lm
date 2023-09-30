var crear = "https://paginas-web-cr.com/ApiPHP/apis/SendPassword.php";

const myModalSuccess = new bootstrap.Modal(document.getElementById('myModalSuccess'));

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
    myModalSuccess.show();
    console.log(response);
},
error: function(xhr, textstatus, errorthrown){
    console.log("Error ", errorthrown);
}
});
}