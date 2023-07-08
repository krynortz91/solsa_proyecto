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
                     <img src="../assets/3.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-bar-chart"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Mecanizados en terreno</a></h2>
                  <p>
                  En SOLSA ofrecemos servicios de mecanizado en terreno, brindando soluciones  de barrenado de precisión, efectivas y eficiencientes con excelente gestión y manejo logístico, con un personal calificado y experimentado que nos asegura entregar un excelente servicio.
                  </p>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/5.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-brightness-high"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Arriendo de Equipos de Apoyo</a></h2>
                  <p>
                     Contamos con equipos de apoyo disponibles para arriendo, que se adaptan a las necesidades de su industria. Dentro de este servicio, ofrecemos:

                  </p>
               </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
               <div class="about-col">
                  <div class="img">
                     <img src="../assets/4.jpg" alt="" class="img-fluid">
                     <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                  </div>
                  <h2 class="title"><a href="#">Mecanizado en terreno </a></h2>
                  <p>
                     Servicio de Reparación de alojamientos, barrenado a maquinaría industrial, apoyo de trabajos con equipo faro.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- End About Us Section -->
</template>
<script></script>
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
</style>
