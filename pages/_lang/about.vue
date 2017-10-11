<template>
  <app-title>
    {{ $t('default.about') }}
  </app-title>
</template>

<script>
import AppTitle from '~/components/AppTitle';

export default {
  name: 'about',
  head () {
    return {
      title: this.$t('default.about')
    }
  },
  components: {
    AppTitle
  }
}
</script>

