<template>
  <div id="index-page">
    <Navbar />
    <main-jumbotron />
    <b-container>
      <about-us />
      <donation-section />
      <features-section />
      <how-it-works-section />
      <!-- <pricing-section /> -->
      <extra-info-section />
      <contact-section />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/en/layout/Navbar'
import Footer from '@/components/en/layout/Footer'
import MainJumbotron from '@/components/en/index/MainJumbotron'
import AboutUs from '@/components/en/index/AboutUs'
import DonationSection from '@/components/en/index/DonationSection'
import FeaturesSection from '@/components/en/index/FeaturesSection'
import HowItWorksSection from '@/components/en/index/HowItWorksSection'
// import PricingSection from '@/components/en/index/PricingSection'
import ExtraInfoSection from '@/components/en/index/ExtraInfoSection'
import ContactSection from '@/components/en/index/ContactSection'
export default {
  head() {
    return {
      title: 'Dawai — The Medicine Platform for Sudan',
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
          href: 'https://dawai.x249.net'
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer,
    MainJumbotron,
    AboutUs,
    DonationSection,
    FeaturesSection,
    HowItWorksSection,
    // PricingSection,
    ExtraInfoSection,
    ContactSection
  }
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif !important;
}
#index-page {
  padding: 0 !important;
}
</style>
