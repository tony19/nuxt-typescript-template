module.exports = {
  srcDir: 'src',
  head: {
    title: 'Nuxt Firebase Auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  mode: 'spa',
  loading: { color: '#3f51b5' },
  build: {
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
        if (isDev) {
          config.devtool = 'source-map';
        }
      }
    },
    extractCSS: true,
    analyze: {
      analyzerMode: 'static'
    }
  },
  modules: [
    '@nuxtjs/pwa',
    '~/modules/typescript.js'
  ],
  router: {
    middleware: 'router-auth'
  },
  plugins: [
    {src: '~/plugins/vuetify'},
    '~/plugins/fireauth'
  ],
  css: [
    { src: '~/assets/css/main.styl', lang: 'styl'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ]
}
