<template>
  <section class="faq-section">
      <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'faq-section'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_extends';
@import '../assets/scss/_breakpoints';

.faq-section {
  @extend .container;

}
</style>

