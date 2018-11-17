const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/firebase.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  manifest: {
    gcm_sender_id: '103953800507',
    name: 'PWATest',
    short_name: 'PWA',
    title: 'PWATest',
    lang: 'ja',
    'og:title': 'PWATest',
    description: 'PWATest',
    'og:description': 'PWATest',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/'
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/firebase.js'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  workbox: {
    dev: true
  },
  axios: {
    proxy: true
  },
  vuetify: {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  env: {
    base_url: process.env.BASE_URL,
    vapid_key: process.env.VAPID_KEY,
    fcm_server_key: process.env.FCM_SERVER_KEY,
    api_key: process.env.API_KEY,
    auth_domain: process.env.AUTH_DOMAIN,
    db_url: process.env.DB_URL,
    prj_id: process.env.PROJECT_ID,
    store_bucket: process.env.STORE_BUCKET,
    sender_id: process.env.SENDER_ID,
    fcm_http_api: process.env.FCM_HTTP_API
  }
}
