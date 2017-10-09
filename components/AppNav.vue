<template>
  <nav :class="['app-nav', { active: open }]" @click.self="toggle">
    <app-nav-menu>
      <app-nav-menu-link to="/login" :value="$t('default.login')" @click.native="toggle" />
      <app-nav-menu-link to="https://www.patreon.com/" value="Patreon" :external="true" />
      <app-nav-menu-link to="/about" :value="$t('default.about')" @click.native="toggle" />
      <app-nav-menu-dropdown :value="$t('default.language')">
        <app-nav-menu-dropdown-item label="Español" />
        <app-nav-menu-dropdown-item label="Inglés" />
      </app-nav-menu-dropdown>
    </app-nav-menu>
  </nav>
</template>

<script>
import EventBus from '~/utils/event-bus';
import AppNavMenu from '~/components/AppNavMenu';
import AppNavMenuLink from '~/components/AppNavMenuLink';
import AppNavMenuDropdown from '~/components/AppNavMenuDropdown';
import AppNavMenuDropdownItem from '~/components/AppNavMenuDropdownItem';

export default {
  name: 'app-nav',
  components: {
    AppNavMenu,
    AppNavMenuLink,
    AppNavMenuDropdown,
    AppNavMenuDropdownItem
  },
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
}
</style>


