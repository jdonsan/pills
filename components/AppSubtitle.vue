<template>
  <h3 class="app-subtitle">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'app-subtitle'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
  @import '../assets/scss/_breakpoints';

.app-subtitle {
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
}
</style>

