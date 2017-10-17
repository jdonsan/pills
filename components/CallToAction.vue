<template>
  <section class="call-to-action">
    <div>
      <app-nuxt-link class="button" to="/">Empieza aquí</app-nuxt-link>
    </div>
    <video controls poster="~/assets/img/vue.jpg">
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
  text-align: center;
  background: transparent;
  border-radius: 4px;
  z-index: 4;
  position: relative;
  margin-top: -9rem;

  @media (min-width: $media-breakpoint-medium) {}

  video {
    width: 100%;
    margin: 0 auto;
    display: block;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

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
    margin: 1rem;
    border-radius: 2px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: inline-block;
  }
}
</style>
