<template>
  <b-container>
    <main-jumbotron />
    <about-section />
    <pricing-section />
    <support-section />
  </b-container>
</template>

<script>
import MainJumbotron from '@/components/index/MainJumbotron'
import AboutSection from '@/components/index/AboutSection'
import PricingSection from '@/components/index/PricingSection'
import SupportSection from '@/components/index/SupportSection'
export default {
  head() {
    return {
      title: 'Dawai — The Medicine Platform',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Medicine Locator and Pharmacy Management Solution for Sudan. Search and find any medicine in Sudan using our databse of over 4000 records connected with Pharmacies all over the country. Manage your entire Pharmacy using Dawai's Management software that gives you beautiful Charts and meaningful Analytics!"
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dawai.netlify.com' + this.$route.path
        }
      ]
    }
  },
  components: {
    MainJumbotron,
    AboutSection,
    PricingSection,
    SupportSection
  }
}
</script>
