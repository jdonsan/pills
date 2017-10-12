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

.subtitle {
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
}
</style>

