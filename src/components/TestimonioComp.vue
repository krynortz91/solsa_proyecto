<template>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
   <section id="testimonials" class="section-bg">
      <div class="container" data-aos="fade-up">
         <header class="section-header">
            <h3>Testimonios</h3>
         </header>
         <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                  <div class="testimonial-item">
                     <img src="assets/img/testimonial-1.jpg" class="testimonial-img" alt="">
                     <h3>Saul Goodman</h3>
                     <h4>Ceo &amp; Fundador</h4>
                     <p>
                        <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                        La empresa ofrece servicios de excelente calidad en el campo de la mecánica, brindando soluciones efectivas y profesionales en estructuras, equipos mecánicos, plantas industriales y maquinaria industrial. 
                        <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                     </p>
                  </div>
               </div>
               <!-- End testimonial item -->
               <div class="swiper-slide">
                  <div class="testimonial-item">
                     <img src="assets/img/testimonial-2.jpg" class="testimonial-img" alt="">
                     <h3>Sara Wilsson</h3>
                     <h4>Codelc</h4>
                     <p>
                        <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                        Servicio destacado.
                        <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                     </p>
                  </div>
               </div>
               <!-- End testimonial item -->
               <div class="swiper-slide">
                  <div class="testimonial-item">
                     <img src="assets/img/testimonial-3.jpg" class="testimonial-img" alt="">
                     <h3>Jena Karlis</h3>
                     <h4>Store Owner</h4>
                     <p>
                        <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                     </p>
                  </div>
               </div>
               <!-- End testimonial item -->
               <div class="swiper-slide">
                  <div class="testimonial-item">
                     <img src="assets/img/testimonial-4.jpg" class="testimonial-img" alt="">
                     <h3>Matt Brandon</h3>
                     <h4>Freelancer</h4>
                     <p>
                        <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                     </p>
                  </div>
               </div>
               <!-- End testimonial item -->
               <div class="swiper-slide">
                  <div class="testimonial-item">
                     <img src="assets/img/testimonial-5.jpg" class="testimonial-img" alt="">
                     <h3>John Larson</h3>
                     <h4>Entrepreneur</h4>
                     <p>
                        <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                     </p>
                  </div>
               </div>
               <!-- End testimonial item -->
            </div>
            <div class="swiper-pagination"></div>
         </div>
      </div>
   </section>
   <!-- End Testimonials Section -->
</template>
<script>
   export default {
   name: 'TestimonioComp',
   };
   import 'swiper/swiper-bundle.css';
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
   #testimonials {
   padding: 60px 0;
   }
   #testimonials .section-header {
   margin-bottom: 40px;
   }
   #testimonials .testimonials-carousel,
   #testimonials .testimonials-slider {
   overflow: hidden;
   }
   #testimonials .testimonial-item {
   text-align: center;
   }
   #testimonials .testimonial-item .testimonial-img {
   width: 120px;
   border-radius: 50%;
   border: 4px solid #fff;
   margin: 0 auto;
   }
   #testimonials .testimonial-item h3 {
   font-size: 20px;
   font-weight: bold;
   margin: 10px 0 5px 0;
   color: #111;
   }
   #testimonials .testimonial-item h4 {
   font-size: 14px;
   color: #999;
   margin: 0 0 15px 0;
   }
   #testimonials .testimonial-item .quote-sign-left {
   margin-top: -15px;
   padding-right: 10px;
   display: inline-block;
   width: 37px;
   }
   #testimonials .testimonial-item .quote-sign-right {
   margin-bottom: -15px;
   padding-left: 10px;
   display: inline-block;
   max-width: 100%;
   width: 37px;
   }
   #testimonials .testimonial-item p {
   font-style: italic;
   margin: 0 auto 15px auto;
   }
   @media (min-width: 992px) {
   #testimonials .testimonial-item p {
   width: 80%;
   }
   }
   #testimonials .swiper-pagination {
   margin-top: 20px;
   position: relative;
   }
   #testimonials .swiper-pagination .swiper-pagination-bullet {
   width: 12px;
   height: 12px;
   background-color: #fff;
   opacity: 1;
   border: 1px solid #18d26e;
   }
   #testimonials .swiper-pagination .swiper-pagination-bullet-active {
   background-color: #18d26e;
   }
</style>
