<template>
  <NavBar/>
  <router-view />
  <Whatsapp />
  <TopArrow />
  <FooterComp/>
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
import Whatsapp from "@/components/Whatsapp.vue"
import TopArrow from "@/components/TopArrow.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    Whatsapp,
    TopArrow
  }
}
</script>

<style>
  *{
    scroll-margin: 20px;
    margin: 0;
    padding: 0;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0 0 20px 0;
  }
  
</style>
