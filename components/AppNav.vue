<template>
  <nav :class="['app-nav', { active: open }]" @click.self="toggle">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
import EventBus from '~/utils/event-bus';

export default {
  name: 'app-nav',
  data() {
    return {
      open: false
    }
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
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.app-nav {
  transform: translate(100%);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: .5s;

  @media (min-width: $media-breakpoint-medium) {
    display: block;
    width: auto;
    position: initial;
    transform: translate(0);
  }

  &.active {
    transform: translate(0);
  }

  ul {
    list-style: none;
    background: $color-basic-ligth;
    margin: 0;
    padding: 1rem;
    width: 15rem;
    height: 100%;
    float: right;
    text-align: center;
    box-shadow: 1px 0px 10px 0px #222;

    @media (min-width: $media-breakpoint-medium) {
      padding: 0;
      box-shadow: 0 0 0 0;
      width: auto;
    }
  }
}
</style>


