<template>
  <section class="call-to-action">
    <div class="call-to-action-title">

      <app-nuxt-link class="button" to="/">Ver Video</app-nuxt-link>
    </div>
    <video controls>
      <source src="~/assets/videos/vue-debug.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script>
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'call-to-action',
  components: {
    AppNuxtLink
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_extends';
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.call-to-action {
  @extend .container;
  background: transparent;
  border-radius: 4px;
  margin-top: -2.5rem;
  z-index: 4;
  position: relative;

  @media (min-width: $media-breakpoint-medium) {
    margin-top: -5rem;
    display: flex;
    align-items: flex-start;
  }

  video {
    width: 100%;

    @media (min-width: $media-breakpoint-medium) {
      width: 70%;
    }
  }

  .button {
    background: $color-primary;
    font-size: 1rem;
    text-transform: uppercase;
    color: $color-basic-ligth;
    padding: 1rem 1.5rem;
    border-radius: 2px;
    font-weight: bold;
    text-decoration: none;
  }
}

.call-to-action-title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (min-width: $media-breakpoint-medium) {
    margin-top: 2.5rem;
  }
}
</style>
