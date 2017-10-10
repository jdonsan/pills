<template>
  <img src="../assets/img/icons/menu.png" @click="toggle" />
</template>

<script>
import toggleMenu from '~/mixins/toggle-menu';

export default {
  name: 'app-nav-button',
  mixins: [toggleMenu],
  data: function() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_breakpoints';

img {
  cursor: pointer;
  
  @media (min-width: $media-breakpoint-medium) {
    display: none;
  }
}
</style>


