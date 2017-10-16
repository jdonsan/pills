module.exports = {
  head: {
    title: ' ',
    titleTemplate: '%s - Pills: Aprende mucho en poco tiempo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Proyecto Pills' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  router: {
    base: '/pills/',
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js',],
  build: {
    vendor: ['vue-i18n'],
    publicPath: '/statics/',
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');

      vueLoader.options.transformToRequire = {
        video: 'poster',
        video: 'src',
        source: 'src'
      }
    }
  },
  generate: {
    routes: ['/', '/about', '/login', '/en', '/en/about', '/en/login']
  }
}
