<template>
  <div class="app">
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
  components: {
    Navbar
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
