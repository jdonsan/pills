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
@import '../assets/scss/_breakpoints';
@import '../assets/scss/_colors';

.app-title {
  display: flex;
  height: 20vh;
  text-align: center;
  background: linear-gradient($color-primary 0%, $color-secondary 100%);
  justify-content: center;
  align-items: center;
  color: $color-basic-ligth;
  font-size: 1.5rem;


  &.landing {
    height: 60vh;

    @media (min-width: $media-breakpoint-medium) {
      font-size: 2.5rem;
    }
  }
}
</style>


