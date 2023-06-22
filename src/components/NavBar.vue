<template>
   <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container-fluid">
         <div class="row justify-content-center align-items-center">
            <div class="col-xl-11 d-flex align-items-center justify-content-between">
               <nav id="navbar" class="navbar">
                  <ul>
                     <router-link to="/#hero">INICIO</router-link>
                     <li class="dropdown">
                        <router-link to="/ServiciosView">Servicios <i class="bi bi-chevron-down"></i></router-link>
                        <ul>
                           <router-link to="/ServiciosView#mecanizado">Mecanizados en Terreno</router-link>
                           <li class="dropdown">
                              <router-link to="/ServiciosView#arriendoEquipos">Arriendo de Equipos de Apoyo <i class="bi bi-chevron-right"></i></router-link>
                              <ul>
                                 <router-link to="/ServiciosView">Hidrolavadora Diesel Autónoma</router-link>
                                 <router-link to="/ServiciosView">Hitorc</router-link>
                                 <router-link to="/ServiciosView">Enerpac</router-link>
                                 <router-link to="/ServiciosView">FullTorque</router-link>
                              </ul>
                           </li>
                           <router-link to="/ServiciosView#arriendoCamionetas">Arriendo de Camionetas 4x4 con equipamiento Minero</router-link>
                           <li class="dropdown">
                              <router-link to="/ServiciosView#reparacionEquipos">Reparación de Equipos Autónomos <i class="bi bi-chevron-right"></i></router-link>
                              <ul>
                                 <router-link to="/ServiciosView">Hidrolavadoras</router-link>
                                 <router-link to="/ServiciosView">Calefactores Diesel</router-link>
                                 <router-link to="/ServiciosView">Torres de Iluminación</router-link>
                              </ul>
                           </li>
                           <li class="dropdown">
                              <router-link to="/ServiciosView#proyectos">Proyectos <i class="bi bi-chevron-right"></i></router-link>
                              <ul>
                                 <router-link to="/ServiciosView">Ingeniería</router-link>
                                 <router-link to="/ServiciosView">Maestranza</router-link>
                                 <router-link to="/ServiciosView">Mantenimiento Industrial</router-link>
                                 <router-link to="/ServiciosView">Mantenimiento de Instalaciones</router-link>
                              </ul>
                           </li>
                           <li class="dropdown">
                              <router-link to="/ServiciosView#ferreteria">
                              Ferretería especializada <i class="bi bi-chevron-right"></i></router-link>
                              <ul>
                                 <router-link to="/ServiciosView">Suministro de Insumos en menos de 24 horas </router-link>
                                 <router-link to="/ServiciosView">Suministro de Herramientas en menos de 24 horas</router-link>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <router-link to="/#portfolio">Galería</router-link>
                     <router-link to="/#contact">Contacto</router-link>
                  </ul>
                  <i class="bi bi-list mobile-nav-toggle"></i>
               </nav>
               <!-- .navbar -->
               <a href="index.html" class="logo"><img src="../assets/logo.png" alt="" class="img-fluid"></a>
            </div>
         </div>
      </div>
   </header>
   <!-- End Header -->
</template>
<script>
   export default {
   name: 'NavBar', 
   }
</script>
<style scoped>
   #header {
      background-color: #0000009f;
   }
   body {
      background: #fff;
      color: #666666;
   }
   a {
      color: #18d26e;
      transition: 0.5s;
      text-decoration: none;
      font-family: "Montserrat", sans-serif;
   }
   a:hover,
   a:active,
   a:focus {
      color: #18d36e;
      outline: none;
      text-decoration: none;
   }
   p {
      margin: 0 0 30px 0;
   }

   .img-fluid{
      height: 70px;
      padding: 5px 0;
   }
   .navbar ul {
      display: flex;
      list-style: none;
      align-items: center;
   }
   .navbar li {
      position: relative;
   }
   .navbar a,
   .navbar a:focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0 10px 30px;
      
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      text-transform: uppercase;
      transition: 0.3s;
   }
   .navbar a i,
   .navbar a:focus i {
      font-size: 12px;
      line-height: 0;
      margin-left: 5px;
   }
   .navbar a:hover,
   .navbar .active,
   .navbar .active:focus,
   .navbar li:hover>a {
   color: #18d26e;
   }
   .navbar .dropdown ul {
      display: block;
      position: absolute;
      left: 14px;
      top: calc(100% + 30px);
      padding: 10px 0;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: 0.3s;
   }
   .navbar .dropdown ul li {
      min-width: 200px;
   }
   .navbar .dropdown ul a {
      padding: 10px 20px;
      text-transform: none;
      color: #666666;
   }
   .navbar .dropdown ul a i {
      font-size: 12px;
   }
   .navbar .dropdown ul a:hover,
   .navbar .dropdown ul .active:hover,
   .navbar .dropdown ul li:hover>a {
      color: #18d26e;
   }
   .navbar .dropdown:hover>ul {
      opacity: 1;
      top: 100%;
      visibility: visible;
   }
   .navbar .dropdown .dropdown ul {
      top: 0;
      left: calc(100% - 30px);
      visibility: hidden;
   }
   .navbar .dropdown .dropdown:hover>ul {
      opacity: 1;
      top: 0;
      left: 100%;
      visibility: visible;
   }
   @media (max-width: 1366px) {
      .navbar .dropdown .dropdown ul {
         left: -90%;
      }
      .navbar .dropdown .dropdown:hover>ul {
         left: -100%;
      }
   }

   /**
   * Mobile Navigation 
   */
   .mobile-nav-toggle {
      color: #fff;
      font-size: 28px;
      cursor: pointer;
      display: none;
      line-height: 0;
      transition: 0.5s;
   }
   @media (max-width: 991px) {
      .mobile-nav-toggle {
         display: block;
      }
      .navbar ul {
         display: none;
      }
   }
   .navbar-mobile {
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(26, 26, 26, 0.9);
      transition: 0.3s;
      z-index: 999;
   }
   .navbar-mobile .mobile-nav-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
   }
   .navbar-mobile ul {
      display: block;
      position: absolute;
      top: 55px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      padding: 10px 0;
      background-color: #fff;
      overflow-y: auto;
      transition: 0.3s;
   }
   .navbar-mobile a,
   .navbar-mobile a:focus {
      padding: 10px 20px;
      font-size: 15px;
      color: #333333;
   }
   .navbar-mobile a:hover,
   .navbar-mobile .active,
   .navbar-mobile li:hover>a {
      color: #18d26e;
   }
   .navbar-mobile .getstarted,
   .navbar-mobile .getstarted:focus {
      margin: 15px;
   }
   .navbar-mobile .dropdown ul {
      position: static;
      display: none;
      margin: 10px 20px;
      padding: 10px 0;
      z-index: 99;
      opacity: 1;
      visibility: visible;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
   }
   .navbar-mobile .dropdown ul li {
      min-width: 200px;
   }
   .navbar-mobile .dropdown ul a {
      padding: 10px 20px;
   }
   .navbar-mobile .dropdown ul a i {
   font-size: 12px;
   }
   .navbar-mobile .dropdown ul a:hover,
   .navbar-mobile .dropdown ul .active:hover,
   .navbar-mobile .dropdown ul li:hover>a {
   color: #18d26e;
   }
   .navbar-mobile .dropdown>.dropdown-active {
   display: block;
   }
</style>
