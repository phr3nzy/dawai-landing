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
            'ابحث عن أي دواء في السودان عبر البحث في قاعده بيانات دواي التي تضم اكثر من 4000 دواء. سرع عمليه البيع في صيدليتك بإستخدام منصه دواي. دواي هي منصه تسرع عمليه تفتيش الدواء للمستخدم عبر توصيله للصيدليات في ارجاء البلاد, وتسريع عمليه البيع للصيدليلات عبر جلبهم الزبائن'
        },
        // Open Graph
        { name: 'og:title', content: 'دواي — منصة الدواء للسودان' },
        {
          name: 'og:description',
          content:
            'ابحث عن أي دواء في السودان عبر البحث في قاعده بيانات دواي التي تضم اكثر من 4000 دواء. سرع عمليه البيع في صيدليتك بإستخدام منصه دواي. دواي هي منصه تسرع عمليه تفتيش الدواء للمستخدم عبر توصيله للصيدليات في ارجاء البلاد, وتسريع عمليه البيع للصيدليلات عبر جلبهم الزبائن'
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://dawai.x249.net/ar' },
        {
          name: 'og:image',
          content: 'https://dawai.x249.net/sudan-map-green-whitebg-min.png'
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@_phr3nzy' },
        { name: 'twitter:title', content: 'دواي — منصة الدواء للسودان' },
        { name: 'twitter:url', content: 'https://dawai.x249.net/ar' },
        {
          name: 'twitter:description',
          content:
            'ابحث عن أي دواء في السودان عبر البحث في قاعده بيانات دواي التي تضم اكثر من 4000 دواء. سرع عمليه البيع في صيدليتك بإستخدام منصه دواي. دواي هي منصه تسرع عمليه تفتيش الدواء للمستخدم عبر توصيله للصيدليات في ارجاء البلاد, وتسريع عمليه البيع للصيدليلات عبر جلبهم الزبائن'
        },
        {
          name: 'twitter:image',
          content: 'https://dawai.x249.net/sudan-map-green-whitebg-min.png'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dawai.x249.net/ar/'
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
