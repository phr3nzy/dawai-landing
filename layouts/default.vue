<template>
  <div id="app">
    <navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
#app {
  padding: 0;
  margin: 0;
}
</style>
