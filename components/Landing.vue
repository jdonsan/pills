<template>
  <section class="landing">
    <h2>Pills</h2>
  </section>
</template>

<script>
export default {
  name: 'landing'
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.landing {
  display: flex;
  height: 60vh;
  background: linear-gradient($color-primary 0%, $color-secondary 100%);
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 5rem;
    color: $color-basic-ligth;
  }
}
</style>


