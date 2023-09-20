menuprincipal.innerHTML += `
<nav class="navbar bg-body-tertiary position-fixed top-0 end-0">
  <div class="container-fluid">
<button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
<span class="navbar-toggler-icon"></span>
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="estudiantes.html">Estudiantes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="profesores.html">Profesores</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cursos.html">Cursos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="grupos.html">Grupos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="usuarios.html">Usuarios</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://paginas-web-cr.com/ApiPHP/">API</a>
  </li>
</ul>
  </div>
</div></div></nav>
`;