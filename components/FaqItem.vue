<template>
  <div class="faq-item">
      <h3>{{ question }}</h3>
      <p>
        <slot></slot>
      </p>
  </div>
</template>

<script>
export default {
  name: 'faq-item',
  props: {
    question: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.faq-item {
  margin-bottom: 3rem;

  h3 {
    text-transform: uppercase;
    border-bottom: 3px solid $color-primary;
    display: inline-block;
    margin: 0;
  }
}
</style>


