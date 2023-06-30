<template>
   <!-- ======= About Us Section ======= -->
   <section id="about">
      <div class="container" data-aos="fade-up">
         <header class="section-header">
            <h3>Nuestros Servicios</h3>
            <p>Revisa nuestros servicios.</p>
         </header>
         <div class="row about-cols">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/servicios/3.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-gear-fill"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Mecanizado en terreno</a></h2>
                  <p>
                     Maximiza la eficiencia y minimiza los tiempos de inactividad con nuestro servicio de mecanizado directamente en tu ubicación. Descubre cómo podemos llevar tu proyecto al siguiente nivel. 
                  </p>
                  <router-link to="/ServiciosView">Ver mas</router-link>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/5.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-box-seam"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Arriendo de Equipos de Apoyo</a></h2>
                  <p>
                     Potencia tu proyecto con la mejor infraestructura. Contamos con una amplia gama de equipos disponibles para arriendo, listos para brindarte el respaldo necesario. Optimiza tu operación y asegura el éxito. 
                  </p>
                  <router-link to="/ServiciosView">Ver mas</router-link>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/servicios/2.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-truck"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Arriendo de Camionetas 4x4 con equipamiento Minero</a></h2>
                  <p>
                     Potencia tu proyecto con la movilidad y resistencia que necesitas. Nuestras camionetas 4x4 equipadas para el sector minero están listas para enfrentar cualquier desafío. Rentabilidad y confiabilidad garantizadas.                 
                  </p>
                  <router-link to="/ServiciosView">Ver mas</router-link>
               </div>
            </div>
         </div>
         <div class="row about-cols">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/servicios/1.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-wrench"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Reparación de Equipos Autónomos</a></h2>
                  <p>
                     Nuestro servicio de reparación especializado en equipos autónomos garantiza su pronta recuperación y funcionamiento óptimo. Confía en nuestro equipo de expertos y vuelve a la acción sin demoras. 
                  </p>
                  <router-link to="/ServiciosView">Ver mas</router-link>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/servicios/4.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-bar-chart"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Proyectos</a></h2>
                  <p>
                     Confía en nuestro equipo para llevar a cabo proyectos integrales que abarcan desde la ingeniería y diseño, hasta la fabricación, reparación y mantenimiento. Nuestra experiencia y enfoque en la excelencia garantizan soluciones inteligentes y resultados de calidad. 
                  </p>
                  <router-link to="/ServiciosView">Ver mas<i class="bi bi-plus"></i></router-link>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/servicios/5.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-tools"></i></div>
                  </div>
                  <h2 class="title"><a href="#"> Ferretería especializada</a></h2>
                  <p>
                     Encuentra todo lo que necesitas para tus proyectos. Nuestra amplia selección de herramientas y materiales de alta calidad te ofrece soluciones confiables y duraderas. 
                  </p>
                  <router-link to="/ServiciosView">Ver mas</router-link>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- End About Us Section -->
</template>
<script>
   export default {
     name: "ServiciosComp",
     }
</script>
<style scoped>
   body {
   background: #fff;
   color: #666666;
   font-family: "Montserrat", sans-serif;
   }
   a {
   color: #18d26e;
   transition: 0.5s;
   text-decoration: none;
   }
   .bi-plus{
      color:#18d26e;
   }
   a:hover,
   a:active,
   a:focus {
   color: #18d36e;
   outline: none;
   text-decoration: none;
   }
   p {
   padding: 0;
   margin: 0 0 30px 0;
   font-family: "Montserrat", sans-serif;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: "Montserrat", sans-serif;
   font-weight: 600;
   margin: 0 0 20px 0;
   padding: 0;
   }
   #about {
   /* background: url("../img/about-bg.jpg") center top no-repeat fixed; */
   background-size: cover;
   padding: 60px 0 40px 0;
   position: relative;
   }
   #about::before {
   content: "";
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background: rgba(255, 255, 255, 0.92);
   z-index: 9;
   }
   #about .container {
   position: relative;
   z-index: 10;
   }
   #about .about-col {
   background: #fff;
   border-radius: 0 0 4px 4px;
   box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
   margin-bottom: 20px;
   }
   #about .about-col .img {
   position: relative;
   }
   #about .about-col .img img {
   border-radius: 4px 4px 0 0;
   }
   #about .about-col .icon {
   width: 64px;
   height: 64px;
   text-align: center;
   position: absolute;
   background-color: #18d26e;
   border-radius: 50%;
   border: 4px solid #fff;
   left: calc(50% - 32px);
   bottom: -30px;
   transition: 0.3s;
   display: flex;
   align-items: center;
   justify-content: center;
   }
   #about .about-col i {
   font-size: 28px;
   line-height: 0;
   color: #fff;
   transition: 0.3s;
   }
   #about .about-col:hover .icon {
   background-color: #fff;
   }
   #about .about-col:hover i {
   color: #18d26e;
   }
   #about .about-col h2 {
   color: #000;
   text-align: center;
   font-weight: 700;
   font-size: 20px;
   padding: 0;
   margin: 40px 0 12px 0;
   }
   #about .about-col h2 a {
   color: #000;
   }
   #about .about-col h2 a:hover {
   color: #18d26e;
   }
   #about .about-col p {
   font-size: 14px;
   line-height: 24px;
   color: #333;
   margin-bottom: 0;
   padding: 0 20px 20px 20px;
   }
  .readmore {
   margin-top: 15px;
   display: inline-block;
   color: #333;
   font-family: "Montserrat", sans-serif;
   font-size: 14px;

   }
</style>
