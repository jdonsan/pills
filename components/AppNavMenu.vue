<template>
  <ul class="app-nav-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'app-nav-menu'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.app-nav-menu {
  list-style: none;
  background: $color-basic-ligth;
  margin: 0;
  padding: 1rem;
  width: 15rem;
  height: 100%;
  float: right;
  text-align: center;
  box-shadow: 1px 0px 10px 0px #222;

  @media (min-width: $media-breakpoint-medium) {
    padding: 0;
    box-shadow: 0 0 0 0;
    width: auto;
  }
}
</style>

