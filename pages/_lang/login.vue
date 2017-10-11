<template>
  <app-title>{{ $t('default.login') }}</app-title>
</template>

<script>
import AppTitle from '~/components/AppTitle';

export default {
  name: 'login',
  components: {
    AppTitle
  },
  head () {
    return {
      title: this.$t('default.login')
    }
  }
}
</script>

