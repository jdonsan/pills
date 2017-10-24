<template>
  <section :class="['app-title', { landing: landing }]">
    <img src="~/assets/img/bg.jpg" alt="background">
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
  height: 5rem;
  background: linear-gradient($color-primary 0%, $color-secondary 100%);
  justify-content: center;
  align-items: center;
  color: $color-basic-ligth;
  font-size: 1.5rem;


  img {
    display: none;
  }

  &.landing {
    height: 25rem;
    background: #222;
    position: relative;
    z-index: 2;

    img {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.4;
    }

    @media (min-width: $media-breakpoint-medium) {
      font-size: 2.5rem;
    }
  }
}
</style>


