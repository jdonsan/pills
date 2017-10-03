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
  height: 70vh;

  background: linear-gradient(#42B883 0%, #35495E 100%);

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 5rem;
    color: $color-basic-ligth;
  }
}
</style>


