<template>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
   <section id="contact" class="section-bg">
      <div class="container" data-aos="fade-up">
         <div class="section-header">
            <h3>Contactános</h3>
            <p>Conoce todas las formas de ubicarnos</p>
         </div>
         <div class="row contact-info">
            <div class="col-md-4">
               <div class="contact-address">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Dirección</h3>
                  <address>Chile</address>
               </div>
            </div>
            <div class="col-md-4">
               <div class="contact-phone">
                  <i class="bi bi-phone"></i>
                  <h3>Teléfono</h3>
                  <p><a href="tel:+155895548855">+56 9 7166 4521</a></p>
               </div>
            </div>
            <div class="col-md-4">
               <div class="contact-email">
                  <i class="bi bi-envelope"></i>
                  <h3>Email</h3>
                  <p><a href="mailto:info@example.com">info@solsa.cl</a></p>
               </div>
            </div>
         </div>
         <div class="form">
            <form action="correo.php" method="POST" role="form" class="php-email-form">
               <div class="row">
                  <div class="form-group col-md-6">
                     <input type="text" name="name" class="form-control" id="name" placeholder="Tu nombre" required>
                  </div>
                  <div class="form-group col-md-6">
                     <input type="email" class="form-control" name="email" id="email" placeholder="Tu Email" required>
                  </div>
               </div>
               <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
               </div>
               <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
               </div>
               <div class="my-3">
                  <div class="loading">Cargando</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Tu mensaje se envió, gracias!</div>
               </div>
               <div class="text-center"><button type="submit">Enviar mensaje</button></div>
            </form>
         </div>
      </div>
   </section>
   <!-- End Contact Section -->
</template>
<script>
   export default {
   name: 'ContactoComp',
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
   #contact {
   padding: 60px 0;
   }
   #contact .contact-info {
   margin-bottom: 20px;
   text-align: center;
   }
   #contact .contact-info i {
   font-size: 48px;
   display: inline-block;
   margin-bottom: 10px;
   color: #18d26e;
   }
   #contact .contact-info address,
   #contact .contact-info p {
   margin-bottom: 0;
   color: #000;
   }
   #contact .contact-info h3 {
   font-family: "Montserrat", sans-serif;
   font-size: 18px;
   margin-bottom: 15px;
   font-weight: bold;
   text-transform: uppercase;
   color: #999;
   }
   #contact .contact-info a {
   color: #000;
   }
   #contact .contact-info a:hover {
   color: #18d26e;
   }
   #contact .contact-address,
   #contact .contact-phone,
   #contact .contact-email {
   margin-bottom: 20px;
   }
   @media (min-width: 768px) {
   #contact .contact-address,
   #contact .contact-phone,
   #contact .contact-email {
   padding: 20px 0;
   }
   }
   @media (min-width: 768px) {
   #contact .contact-phone {
   border-left: 1px solid #ddd;
   border-right: 1px solid #ddd;
   }
   }
   #contact .php-email-form {
   box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
   padding: 30px;
   background: #fff;
   }
   #contact .php-email-form .error-message {
   display: none;
   color: #fff;
   background: #ed3c0d;
   text-align: left;
   padding: 15px;
   font-weight: 600;
   }
   #contact .php-email-form .error-message br+br {
   margin-top: 25px;
   }
   #contact .php-email-form .sent-message {
   display: none;
   color: #fff;
   background: #18d26e;
   text-align: center;
   padding: 15px;
   font-weight: 600;
   }
   #contact .php-email-form .loading {
   display: none;
   background: #fff;
   text-align: center;
   padding: 15px;
   }
   #contact .php-email-form .loading:before {
   content: "";
   display: inline-block;
   border-radius: 50%;
   width: 24px;
   height: 24px;
   margin: 0 10px -6px 0;
   border: 3px solid #18d26e;
   border-top-color: #eee;
   animation: animate-loading 1s linear infinite;
   }
   #contact .php-email-form .form-group {
   margin-bottom: 20px;
   font-family: "Montserrat", sans-serif;
   }
   #contact .php-email-form input,
   #contact .php-email-form textarea {
   padding: 10px 14px;
   border-radius: 0;
   box-shadow: none;
   font-size: 15px;
   font-family: "Montserrat", sans-serif;
   }
   #contact .php-email-form input::focus,
   #contact .php-email-form textarea::focus {
   background-color: #18d26e;
   }
   #contact .php-email-form button[type=submit] {
   font-family: "Montserrat", sans-serif;
   background: #18d26e;
   border: 0;
   padding: 10px 30px;
   color: #fff;
   transition: 0.4s;
   cursor: pointer;
   }
   #contact .php-email-form button[type=submit]:hover {
   background: #13a456;
   }
   @keyframes animate-loading {
   0% {
   transform: rotate(0deg);
   }
   100% {
   transform: rotate(360deg);
   }
   }
</style>
