<template>
  <section class="pill-section">
    <app-subtitle>{{ title }}</app-subtitle>

    <div class="pill-section-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppSubtitle from '~/components/AppSubtitle';

export default {
  name: 'pill-section',
  components: {
    AppSubtitle
  },
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_extends';
@import '../assets/scss/_breakpoints';

.pill-section {
  @extend .container;
  margin-bottom: 1rem;
}

.pill-section-container {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 0.1rem;

  @media (min-width: $media-breakpoint-small) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $media-breakpoint-large) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>


