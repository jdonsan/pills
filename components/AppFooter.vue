<template>
  <footer class="app-footer">
    <p>Desarrollado con &hearts; por @jdonsan</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.app-footer {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-dark;
  color: $color-basic-ligth;
  position: relative;

  @media (min-width: $media-breakpoint-large) {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      transform-origin: top left;
      transform: skewY(-2deg);
    }
  }
}
</style>


