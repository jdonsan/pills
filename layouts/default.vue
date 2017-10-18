<template>
  <div class="app">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/main';
  @import '../assets/scss/_colors';

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'questrial';
    letter-spacing: .1rem;
  }
</style>
