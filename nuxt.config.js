module.exports = {
  head: {
    htmlAttrs: {
      lang: 'es-ES',
    },
    title: ' ',
    titleTemplate: '%s - Pills: Aprende mucho en poco tiempo',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Proyecto Pills' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#42B883' },

      // CARD FACEBOOK
      { property: 'og:url', content: 'http://your-url.com/' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Pills — Aprende mucho en poco tiempo' },
      { property: 'og:description', content: 'Pills es una plataforma de microvídeos formativos. Aprende una forma más flexible y cómoda' },
      { property: 'og:updated_time', content: '2017-10-04T17:20:50' },
      { property: 'og:image', content: '/pills/favicon.ico' },

      // CARD TWITTER
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdonsan' },
      { name: 'twitter:creator', content: '@jdonsan' },
      { name: 'twitter:title', content: 'Pills — Aprende mucho en poco tiempo' },
      { name: 'twitter:description', content: 'Pills es una plataforma de microvídeos formativos. Aprende una forma más flexible y cómoda' },
      { name: 'twitter:image', content: '/pills/favicon.ico' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pills/favicon.ico' },
      { rel: 'manifest', type: 'application/manifest+json', href: '/pills/manifest.json' }
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
        source: 'src'
      }
    }
  },
  generate: {
    routes: ['/', '/about', '/login', '/en', '/en/about', '/en/login']
  }
}
