<template>
  <router-view />
  <Footer />
</template>
<script>
import Footer from './components/Footer.vue';
export default {
  components: {
    Footer
  }
}
</script>
<style>
* {
  font-family: "Roboto", "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>