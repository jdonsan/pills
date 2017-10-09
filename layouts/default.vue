<template>
  <div class="app">
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/main';
  @import '../assets/scss/_colors';

  .app {
    font-family: 'questrial';
    letter-spacing: .1rem;
  }
</style>
