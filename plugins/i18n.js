import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, isClient, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'es',
    messages: {
      'en': require('~/locales/en.json'),
      'es': require('~/locales/es.json')
    }
  })
};
