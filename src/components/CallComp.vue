<template>
      <section id="call-to-action">
      <div class="container text-center" data-aos="zoom-in">
        <h3>Contrata ahora</h3>
        <p> No pierdas la oportunidad de potenciar tu negocio con nuestras soluciones de ingeniería. </p>
        <div class="cta-btn">
        <router-link to="/#contact">Contactar</router-link>
      </div>
      </div>
    </section><!-- End Call To Action Section -->
</template>
<script>
   export default {
       name: 'CallComp',
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
   font-weight: 400;
   margin: 0 0 20px 0;
   padding: 0;
   }

#call-to-action {
  background: linear-gradient(rgba(0, 142, 99, 0.1), rgba(0, 0, 0, 0.1)), url(../assets/9.jpg) fixed center center;
  background-size: cover;
  padding: 60px 0;
}

#call-to-action h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

#call-to-action p {
  color: #fff;
}

#call-to-action .cta-btn {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px;
  border-radius: 25px;
  transition: 0.5s;
  margin-top: 10px;
  border: 2px solid #fff;
  color: #fff;
}

#call-to-action .cta-btn:hover {
  background: #18d26e;
  border: 2px solid #18d26e;
}
</style>
