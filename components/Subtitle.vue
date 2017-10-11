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
  color: #fff;
  padding: .3rem 1rem;
  background: #222;
  border-radius: 20rem;
  display: inline-block;
  font-weight: bold;
}
</style>

