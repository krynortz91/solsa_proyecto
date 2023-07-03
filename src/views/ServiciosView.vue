<template>
   <div class="container">
      <section id="mecanizado">
         <h2>MECANIZADO</h2> 
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
      <section id="arriendoEquipos">
         <h2>ARIENDO EQUIPOS</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
      <section id="arriendoCamionetas">
         <h2>ARRIENDOP CAMIONETAS</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
      <section id="reparacionEquipos">
         <h2>REPARACION EQUIPOS</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
      <section id="proyectos">
         <h2>PROYECTOS</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
      <section id="ferreteria">
         <h2>FERRETERIA</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis ipsum, unde reiciendis enim obcaecati eum magni odit voluptate, sed fugiat accusamus perspiciatis vero harum. Mollitia asperiores nisi commodi laboriosam.</p>
      </section>
   </div>
</template>
<script>
   // import ServiciosComp from "@/components/ServiciosComp.vue"
   // import ContactoComp from "@/components/ContactoComp.vue"

   export default {
      name: "ServiciosView",
      components: {
         // ServiciosComp,
         // ContactoComp
   },
   updated() {
      var section=this.$router.currentRoute.value.hash.replace("#", "");
      if (section)
         this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
   },
   mounted(){
      var section=this.$router.currentRoute.value.hash.replace("#", "");
      if (section)
         this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
   }
}
</script>

<style scoped>
body {
   background: #fff;
   color: #666666;
  }
</style>
