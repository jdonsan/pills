<template>
  <section class="preview-pills">
    <subtitle>{{ title }}</subtitle>

    <div class="preview-pills-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Subtitle from '~/components/Subtitle';

export default {
  name: 'preview-pills',
  components: {
    Subtitle
  },
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_extends';
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.preview-pills {
  @extend .container;
}

.preview-pills-container {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (min-width: $media-breakpoint-small) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $media-breakpoint-large) {
    grid-template-columns: repeat(3, 1fr);
  }

  div {
    background: $color-secondary;
    height: 20rem;
  }
}
</style>


