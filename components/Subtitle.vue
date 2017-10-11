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
.subtitle {
  text-transform: uppercase;
  color: #222;
  border-bottom: 3px solid #222;
  display: inline-block;
  font-weight: bold;
}
</style>

