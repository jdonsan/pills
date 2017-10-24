<template>
  <li class="app-nav-link" @click="toggle">
    <a v-if="external" :href="to" target="_blank" rel="noopener">
      <slot></slot>
    </a>
    <app-nuxt-link v-else :to="to">
      <slot></slot>
    </app-nuxt-link>
  </li>
</template>

<script>
import toggleMenu from '~/mixins/toggle-menu';
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'app-nav-link',
  components: {
    AppNuxtLink
  },
  mixins: [toggleMenu],
  props: {
    to: { type: String, required: true },
    external: { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_breakpoints';

.app-nav-link {
  padding: 1rem 0;

  @media (min-width: $media-breakpoint-medium) {
    display: inline-block;
    padding: 0 0 0 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    vertical-align: text-bottom;
  }

  a {
    color: inherit;
    text-decoration: none;

    &.nuxt-link-exact-active {
      border-bottom: 3px solid #222;
    }
  }
}
</style>


