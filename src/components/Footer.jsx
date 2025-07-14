import "./styles/footer.scss";

function Footer() {

};

export default Footer;

  <footer>

    <div class="container footer-info">

      <div class="row justify-content-center align-content-center">
  
        <div class="col-md-4 col-sm-5 col-xs-12 mt-2">

          <h2>Contáctanos</h2> 
          <p>Dirección</p>
          <a href="https://maps.app.goo.gl/dqByQF2ZJSJD42v5A" class="link"  target="_blank">Calle 45E #77A - 75. Medellín, Colombia.</a>
          <p>Correo electrónico</p>
          <a href="mailto:ondasonar@gmail.com" class="link">ondasonar@gmail.com</a>
          <p>Teléfono</p>
          <a href="https://web.whatsapp.com/" target="_blank" class="link">(+57) 301 409 42 01</a> 
               
        </div>
  
        <div class="col-md-3 col-sm-5 col-xs-12 mt-2">
          <h2>Información</h2>
          <ul class="nav-footer">
            <li>
              <a class="link" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li>
              <a class="link" href="./pages/servicios.html">Servicios</a>
            </li>
            <li>
              <a class="link" href="./pages/laboratorio.html">Laboratorio</a>
            </li>
            <li>
              <a class="link" href="./pages/equipo.html">Equipo</a>
            </li>
            <li>
              <a class="link" href="./pages/blog.html">Blog</a>
            </li>
            <li>
              <a class="link" href="#">Contacto</a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Scroll to top -->

      <div class="d-flex align-items-center justify-content-center">
        <a href="#top" class="scroll-to-top">
          <i class="bi bi-arrow-up-circle"></i>
        </a>
      </div>
  
    </div>

    <!-- Derechos de autor -->
    <div class="mt-4">
      <p class="derechos-reservados">&#169; 2025 Onda Sonar. Todos los derechos reservados.</p>
    </div>

  </footer>
