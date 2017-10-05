<template>
  <img src="../assets/img/icons/menu.png" @click="toggle" />
</template>

<script>
import EventBus from '~/utils/event-bus';

export default {
  name: 'navigation-button',
  data: function() {
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
@import '../assets/scss/_breakpoints';

img {
  cursor: pointer;
  
  @media (min-width: $media-breakpoint-medium) {
    display: none;
  }
}
</style>


