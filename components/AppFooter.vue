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

.app-footer {
  margin-top: auto;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-dark;
  color: $color-basic-ligth;
}
</style>


