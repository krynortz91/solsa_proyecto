<template>
  <NavBar/>
  <router-view />
  <Whatsapp />
  <TopArrow />
  <HomeView />
  <ServiciosView />
  <GaleriaView />
  <TestimonioComp/>
  <ContactoComp/>
  <FooterComp/>
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
import ContactoComp from "@/components/ContactoComp.vue"
import TestimonioComp from "@/components/TestimonioComp.vue"
import Whatsapp from "@/components/Whatsapp.vue"
import TopArrow from "@/components/TopArrow.vue"
import HomeView from "@/views/HomeView.vue"
import ServiciosView from "@/views/ServiciosView.vue"
import GaleriaView from "@/views/GaleriaView.vue"



export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    ContactoComp,
    TestimonioComp,
    Whatsapp,
    GaleriaView,
    HomeView,
    ServiciosView,
    TopArrow
  }
}
</script>

<style>

</style>
