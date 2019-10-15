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
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: 'https://dawai.netlify.com',
        title:
          'Dawai - Medicine Locator and Pharmacy Management Software for Sudan 💊🇸🇩✨',
        description:
          'Keep tabs on medicine on inventory, track your performance, manage expenses and finances, create invoices and more!',
        locale: 'en-US',
        twitter: '@_phr3nzy',
        img: '/logo-text-whitebg.png',
        themeColor: '#3A005F'
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
      'Dawai - Medicine Locator and Pharmacy Management Software for Sudan 💊🇸🇩✨',
    short_name: 'Dawai',
    lang: 'en',
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#3A005F'
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
    hostname: 'https://dawai.netlify.com',
    gzip: true,
    routes: ['/']
  },
  /*
   ** Robots module configuration
   */
  robots: [{ UserAgent: '*', Disallow: '' }],
  /*
   ** Web Font Loader config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,500,600,700,800&display=swap'] // Loads Montserrat font with swapped display
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
