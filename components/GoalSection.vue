<template>
   <section class="goal-section">
     <slot></slot>
   </section>
</template>

<script>
export default {
  name: 'goal-section'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_extends";
@import "../assets/scss/_breakpoints";

.goal-section {
  @extend .container;
  margin: 1rem auto;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (min-width: $media-breakpoint-large) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>


