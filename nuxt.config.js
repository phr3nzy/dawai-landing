export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3A005F' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'nuxt-helmet',
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: 'https://dawai.x249.net',
        title: 'Dawai - A Medicine Locator and Pharmacy Management Solution',
        description:
          "Dawai is a Medicine Locator and Pharmacy Management Solution for Sudan. Search and find any medicine in Sudan using our databse of over 4000 records connected with Pharmacies all over the country. Manage your entire Pharmacy using Dawai's Management software that gives you beautifully, hand- crafted Charts and meaningful Analytics to increase your performance!",
        locale: 'en-US',
        twitter: '@_phr3nzy',
        img: 'https://dawai.x249.net/sudan-map-green-whitebg-min.png',
        themeColor: '#19e51c'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],
  /*
   ** Manifest setup
   */
  manifest: {
    name:
      'Dawai - Medicine Locator and Pharmacy Management Solution for Sudan 💊🇸🇩✨',
    short_name: 'Dawai',
    lang: 'en',
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#19e51c'
  },
  /*
   ** Page Routing Transition
   */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Layout change transition
   */
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Sitemap module configuration
   */
  sitemap: {
    hostname: 'https://dawai.x249.net',
    gzip: true,
    routes: ['/']
  },
  /*
   ** Robots module configuration
   */
  robots: [
    {
      UserAgent: '*',
      Disallow: '',
      Sitemap: 'https://dawai.x249.net/sitemap.xml'
    }
  ],
  /*
   ** Web Font Loader config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,500&display=swap'] // Loads Montserrat font with swapped display
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
