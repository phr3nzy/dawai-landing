<template>
  <div>
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
