<template>
  <div>
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
  </div>
</template>

<script>
import MainJumbotron from '@/components/index/MainJumbotron'
import AboutUs from '@/components/index/AboutUs'
import DonationSection from '@/components/index/DonationSection'
import FeaturesSection from '@/components/index/FeaturesSection'
import HowItWorksSection from '@/components/index/HowItWorksSection'
// import PricingSection from '@/components/index/PricingSection'
import ExtraInfoSection from '@/components/index/ExtraInfoSection'
import ContactSection from '@/components/index/ContactSection'
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
          href: 'https://dawai.x249.net' + this.$route.path
        }
      ]
    }
  },
  components: {
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
