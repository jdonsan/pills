<template>
  <main>
    <app-title>{{ $t('default.login') }}</app-title>
    <form-login />
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import FormLogin from '~/components/FormLogin';

export default {
  name: 'login',
  components: {
    AppTitle,
    FormLogin
  },
  head() {
    return {
      title: this.$t('default.login')
    }
  }
}
</script>

