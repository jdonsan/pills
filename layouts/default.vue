<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/main';
  @import '../assets/scss/_colors';

  body {
    font-family: 'questrial';
    letter-spacing: .1rem;
  }
</style>
