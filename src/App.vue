<template>
  <NavBar/>
  <router-view />
  <Whatsapp />
  <TopArrow />
  <HomeView />
  <ServiciosView />
  <GaleriaView />
  <FooterComp/>
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
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
