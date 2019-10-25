export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-113175665-3'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'nuxt-helmet',
    'bootstrap-vue/nuxt',
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
    name: 'Dawai',
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
    routes: ['/', '/ar']
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
    custom: {
      families: ['Montserrat:n3,n4,n5', 'Tajawal:n3,n4,n5'],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=swap',
        'https://fonts.googleapis.com/css?family=Tajawal:300,400,500&display=swap&subset=arabic'
      ]
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
