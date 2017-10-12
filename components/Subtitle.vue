<template>
  <h3 class="subtitle">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'subtitle'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
  @import '../assets/scss/_breakpoints';

.subtitle {
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
  padding: 0 1rem;

  @media (min-width: $media-breakpoint-medium) {
    padding: 0;
  }
}
</style>

