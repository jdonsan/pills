<template>
  <section :class="['tittle', { landing: landing }]">
    <h2>{{ value }}</h2>
  </section>
</template>

<script>
export default {
  name: 'tittle',
  props: {
    'value': String,
    'landing': {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.tittle {
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


