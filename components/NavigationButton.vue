<template>
  <img src="../assets/img/icons/menu.png" />
</template>

<script>
export default {
  name: 'navigation-button'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_breakpoints';

img {
  @media (min-width: $media-breakpoint-medium) {
    display: none;
  }
}
</style>


