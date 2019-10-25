<template>
  <div id="ar-index-page">
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
import Navbar from '@/components/ar/layout/Navbar'
import Footer from '@/components/ar/layout/Footer'
import MainJumbotron from '@/components/ar/index/MainJumbotron'
import AboutUs from '@/components/ar/index/AboutUs'
import DonationSection from '@/components/ar/index/DonationSection'
import FeaturesSection from '@/components/ar/index/FeaturesSection'
import HowItWorksSection from '@/components/ar/index/HowItWorksSection'
// import PricingSection from '@/components/ar/index/PricingSection.vue'
import ExtraInfoSection from '@/components/ar/index/ExtraInfoSection'
import ContactSection from '@/components/ar/index/ContactSection'
export default {
  head() {
    return {
      title: 'دواي — منصة الدواء للسودان',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "الطب تحديد المواقع والحلول إدارة الصيدلة للسودان. ابحث وابحث عن أي دواء في السودان باستخدام قاعدة بياناتنا التي تضم أكثر من 4000 سجل مرتبطة بالصيدليات في جميع أنحاء البلاد. قم بإدارة الصيدلية بالكامل باستخدام برنامج Dawai's Management الذي يمنحك مخططات بيانية جميلة وتحليلات ذات معنى!"
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
.float-right {
  float: right !important;
}
* {
  direction: rtl;
  font-family: 'Tajawal', sans-serif !important;
}
</style>
