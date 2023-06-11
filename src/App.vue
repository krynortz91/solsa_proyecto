<template>
  <NavBar/>
  <router-view />
  <Footer/>
  <Whatsapp />
  <TopArrow />
  <HomeView />
  <ServiciosView />
  <GaleriaView />
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import Footer from "@/components/Footer.vue"
import Whatsapp from "@/components/Whatsapp.vue"
import TopArrow from "@/components/TopArrow.vue"
import HomeView from "@/views/HomeView.vue"
import ServiciosView from "@/views/ServiciosView.vue"
import GaleriaView from "@/views/GaleriaView.vue"


export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
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
