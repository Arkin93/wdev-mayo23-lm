var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    modalSuccess.show();
});