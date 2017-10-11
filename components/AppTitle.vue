<template>
  <section :class="['app-title', { landing: landing }]">
    <h2>
      <slot></slot>
    </h2>
  </section>
</template>

<script>
export default {
  name: 'app-title',
  props: {
    landing: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-title {
  display: flex;
  height: 20vh;
  background: linear-gradient($color-primary 0%, $color-secondary 100%);
  justify-content: center;
  align-items: center;
  color: $color-basic-ligth;
  font-size: 2rem;


  &.landing {
    height: 60vh;
    font-size: 4rem;
  }
}
</style>


