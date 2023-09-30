menuprincipal.innerHTML += `
<nav class="navbar">
  <div class="d-flex ms-2">
<button class="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 20">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
</svg>
</button>
<a class="navbar-brand text-light ms-3" href="index.html">Proyecto JQuery</a>
</div>
<div class="d-flex flex-row-reverse">
          <a type="button" class="btn btn-outline-light me-2" href="login.html">Login</a>
          </div>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link link-dark" aria-current="page" href="index.html">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="estudiantes.html">Estudiantes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="profesores.html">Profesores</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="cursos.html">Cursos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="grupos.html">Grupos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="usuarios.html">Usuarios</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" target="_blank" href="https://paginas-web-cr.com/ApiPHP/">API</a>
  </li>
</ul>
  </div>
</div></nav>
`;