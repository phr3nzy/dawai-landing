<template>
  <b-container>
    <main-jumbotron />
    <about-section />
    <pricing-section />
  </b-container>
</template>

<script>
import MainJumbotron from '@/components/index/MainJumbotron'
import AboutSection from '@/components/index/AboutSection'
import PricingSection from '@/components/index/PricingSection'
export default {
  head() {
    return {
      title: 'Dawai — Home'
    }
  },
  components: {
    MainJumbotron,
    AboutSection,
    PricingSection
  }
}
</script>
