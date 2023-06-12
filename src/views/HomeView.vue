<template>
  <!-- ======= hero Section ======= -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
  <section id="hero">
     <div class="hero-container">
        <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
           <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>
           <div class="carousel-inner" role="listbox">
              <div class="carousel-item active" style="background-image: url(assets/img/hero-carousel/1.jpg)">
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="animate__animated animate__fadeInDown">
                          Montaje Industrial Soluciones de Ingeniería
                       </h2>
                       <p class="animate__animated animate__fadeInUp">Servicio de apoyo integral a operaciones industriales, Arriendo de equipos, Herramientas y más.</p>
                       <a href="#featured-services" class="btn-get-started scrollto animate__animated animate__fadeInUp">Servicios</a>
                    </div>
                 </div>
              </div>
              <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/2.jpg)">
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="animate__animated animate__fadeInDown">At vero eos et accusamus</h2>
                       <p class="animate__animated animate__fadeInUp">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                       <a href="#featured-services" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                 </div>
              </div>
              <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/3.jpg)">
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="animate__animated animate__fadeInDown">Temporibus autem quibusdam</h2>
                       <p class="animate__animated animate__fadeInUp">Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                       <a href="#featured-services" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                 </div>
              </div>
              <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/4.jpg)">
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="animate__animated animate__fadeInDown">Nam libero tempore</h2>
                       <p class="animate__animated animate__fadeInUp">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                       <a href="#featured-services" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                 </div>
              </div>
              <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/5.jpg)">
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="animate__animated animate__fadeInDown">Magnam aliquam quaerat</h2>
                       <p class="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       <a href="#featured-services" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                    </div>
                 </div>
              </div>
           </div>
           <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
           <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
           </a>
           <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
           <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
           </a>
        </div>
     </div>
  </section>
  <!-- End Hero Section -->
</template>
<script>
  export default {
  name: "HomeView",
  }
</script>
<style scoped>
  body {
  background: #fff;
  color: #666666;
  font-family: "Open Sans", sans-serif;
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
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin: 0 0 20px 0;
  padding: 0;
  }
  #hero {
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  position: relative;
  }
  @media (max-height: 500px) {
  #hero {
  height: 150vh;
  }
  }
  #hero .carousel,
  #hero .carousel-inner,
  #hero .carousel-item,
  #hero .carousel-item::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  }
  #hero .carousel-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }
  #hero .carousel-item::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.7);
  }
  #hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 70px;
  left: 50px;
  right: 50px;
  }
  #hero .container {
  text-align: center;
  }
  #hero h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
  }
  @media (max-width: 768px) {
  #hero h2 {
  font-size: 28px;
  }
  }
  #hero p {
  width: 80%;
  margin: 0 auto 30px auto;
  color: #fff;
  }
  @media (min-width: 1024px) {
  #hero p {
  width: 60%;
  }
  }
  #hero .carousel-fade {
  overflow: hidden;
  }
  #hero .carousel-fade .carousel-inner .carousel-item {
  transition-property: opacity;
  }
  #hero .carousel-fade .carousel-inner .carousel-item,
  #hero .carousel-fade .carousel-inner .active.carousel-item-start,
  #hero .carousel-fade .carousel-inner .active.carousel-item-end {
  opacity: 0;
  }
  #hero .carousel-fade .carousel-inner .active,
  #hero .carousel-fade .carousel-inner .carousel-item-next.carousel-item-start,
  #hero .carousel-fade .carousel-inner .carousel-item-prev.carousel-item-end {
  opacity: 1;
  transition: 0.5s;
  }
  #hero .carousel-fade .carousel-inner .carousel-item-next,
  #hero .carousel-fade .carousel-inner .carousel-item-prev,
  #hero .carousel-fade .carousel-inner .active.carousel-item-start,
  #hero .carousel-fade .carousel-inner .active.carousel-item-end {
  left: 0;
  transform: translate3d(0, 0, 0);
  }
  #hero .carousel-control-prev,
  #hero .carousel-control-next {
  width: 10%;
  }
  @media (min-width: 1024px) {
  #hero .carousel-control-prev,
  #hero .carousel-control-next {
  width: 5%;
  }
  }
  #hero .carousel-control-next-icon,
  #hero .carousel-control-prev-icon {
  background: none;
  font-size: 32px;
  line-height: 1;
  }
  #hero .carousel-indicators li {
  cursor: pointer;
  }
  #hero .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 32px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
  background: #18d26e;
  }
  #hero .btn-get-started:hover {
  background: #fff;
  color: #18d26e;
  }
</style>
