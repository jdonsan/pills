<template>
  <li class="app-nav-link" @click="toggle">
    <a v-if="external" :href="to" target="_blank">{{ value }}</a>
    <nuxt-link v-else :to="to">{{ value }}</nuxt-link>
  </li>
</template>

<script>
import EventBus from '~/utils/event-bus';

export default {
  name: 'app-nav-link',
  props: {
    value: { type: String, required: true },
    to: { type: String, required: true },
    external: { type: Boolean, required: false, default: false }
  },
  mounted() {
    EventBus.$on('toggle', open => {
      this.open = open;
    });
  },
  methods: {
    toggle() {
      EventBus.$emit('toggle', !this.open);
    }
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


